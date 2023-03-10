using System;
using LegacyApp.Validation;

namespace LegacyApp
{
    public class UserService
    {
        public bool AddUser(string firstName, string surname, string email, DateTime dateOfBirth, int clientId)
        {
            if (!UserValidation.TryParseUser(firstName, surname, email, dateOfBirth, out var user))
            {
                return false;
            }

            var clientRepository = new ClientRepository();
            user.Client = clientRepository.GetById(clientId);

            if (!CreditCheckService.ExecuteCreditCheck(user))
            {
                return false;
            }

            UserDataAccess.AddUser(user);

            return true;
        }
    }
}
