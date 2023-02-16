namespace LegacyApp
{
    internal static class CreditCheckService
    {
        public const int MINIMUM_CREDIT_LIMIT = 500;

        public static bool ExecuteCreditCheck(User user)
        {
            var (hasCreditLimit, creditLimit) = GetCreditLimit(user);
            ApplyChangesToUser(user, hasCreditLimit, creditLimit);

            return PassesCreditCheck(user);
        }

        private static (bool hasCreditLimit, int creditLimit) GetCreditLimit(User user)
        {
            if (ClientCredit.SkipCreditCheck(user.Client))
            {
                return (false, 0);
            }

            using var userCreditService = new UserCreditServiceClient();
            var creditLimit = userCreditService.GetCreditLimit(user.Firstname, user.Surname, user.DateOfBirth);

            if (ClientCredit.DoubleCreditLimitOnCheck(user.Client))
            {
                return (true, creditLimit * 2);
            }

            return (true, creditLimit);
        }

        private static bool PassesCreditCheck(User user)
        {
            if (!user.HasCreditLimit)
            {
                return true;
            }

            return user.CreditLimit >= MINIMUM_CREDIT_LIMIT;
        }

        private static void ApplyChangesToUser(User user, bool hasCreditLimit, int creditLimit)
        {
            user.HasCreditLimit = hasCreditLimit;
            user.CreditLimit = creditLimit;
        }
    }
}
