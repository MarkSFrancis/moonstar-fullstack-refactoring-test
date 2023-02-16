using System;

namespace LegacyApp.Validation
{
    public static class UserValidation
    {
        public const int USER_MINIMUM_AGE = 21;

        public static bool TryParseUser(string firstname, string surname, string email, DateTime dateOfBirth, out User user)
        {
            user = null;

            if (!IsNameValid(firstname, surname))
            {
                return false;
            }

            if (!IsEmailValid(email))
            {
                return false;
            }

            if (!IsAgeAtLeastMinimum(dateOfBirth))
            {
                return false;
            }

            user = new User
            {
                Firstname = firstname,
                Surname = surname,
                EmailAddress = email,
                DateOfBirth = dateOfBirth,
            };

            return true;
        }

        public static bool IsNameValid(string firstName, string surname)
        {
            if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(surname))
            {
                return false;
            }

            return true;
        }

        public static bool IsEmailValid(string email)
        {
            if (!email.Contains("@") && !email.Contains("."))
            {
                return false;
            }

            return true;
        }

        public static bool IsAgeAtLeastMinimum(DateTime dateOfBirth) => IsAgeAtLeast(dateOfBirth, USER_MINIMUM_AGE);

        public static bool IsAgeAtLeast(DateTime dateOfBirth, int minimumAge)
        {
            var now = DateTime.Now;
            int age = now.Year - dateOfBirth.Year;

            // Check if their birthday is yet to pass this year
            if (now.Month < dateOfBirth.Month)
            {
                age--;
            }
            else if (now.Month == dateOfBirth.Month && now.Day < dateOfBirth.Day)
            {
                age--;
            }

            return age >= minimumAge;
        }
    }
}
