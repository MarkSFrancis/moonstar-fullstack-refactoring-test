using System;

using static LegacyApp.Validation.UserValidation;

namespace LegacyApp
{
    public class UserService
    {
        public bool AddUser(string firstName, string surname, string email, DateTime dateOfBirth, int clientId)
        {
            if (!TryParseUser(firstName, surname, email, dateOfBirth, out var user))
            {
                return false;
            }

            var clientRepository = new ClientRepository();
            var client = clientRepository.GetById(clientId);

            user.Client = client;

            if (client.Name == "VeryImportantClient")
            {
                // Skip credit check
                user.HasCreditLimit = false;
            }
            else if (client.Name == "ImportantClient")
            {
                // Do credit check and double credit limit
                user.HasCreditLimit = true;
                using (var userCreditService = new UserCreditServiceClient())
                {
                    var creditLimit = userCreditService.GetCreditLimit(user.Firstname, user.Surname, user.DateOfBirth);
                    creditLimit = creditLimit * 2;
                    user.CreditLimit = creditLimit;
                }
            }
            else
            {
                // Do credit check
                user.HasCreditLimit = true;
                using (var userCreditService = new UserCreditServiceClient())
                {
                    var creditLimit = userCreditService.GetCreditLimit(user.Firstname, user.Surname, user.DateOfBirth);
                    user.CreditLimit = creditLimit;
                }
            }

            if (user.HasCreditLimit && user.CreditLimit < 500)
            {
                return false;
            }

            UserDataAccess.AddUser(user);

            return true;
        }
    }
}
