namespace LegacyApp
{
    public static class ClientCredit
    {
        public static bool SkipCreditCheck(Client client)
        {
            return client.Name == VERY_IMPORTANT_CLIENT;
        }

        public static bool DoubleCreditLimitOnCheck(Client client)
        {
            return client.Name == IMPORTANT_CLIENT;
        }

        private const string VERY_IMPORTANT_CLIENT = "VeryImportantClient";
        private const string IMPORTANT_CLIENT = "ImportantClient";
    }
}
