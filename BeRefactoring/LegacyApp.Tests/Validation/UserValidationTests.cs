using LegacyApp.Validation;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace LegacyApp.Tests.Validation
{
    [TestClass]
    public class UserValidationTests
    {
        private readonly DateTime ValidDateOfBirth = DateTime.Now.AddYears(-22);

        [TestMethod]
        public void TryParseUser_WhenFirstnameIsEmpty_ReturnsFalse()
        {
            var result = UserValidation.TryParseUser("", "test", "test@test.com", ValidDateOfBirth, out _);

            Assert.IsFalse(result);
        }

        [TestMethod]
        public void TryParseUser_WhenSurnameIsEmpty_ReturnsFalse()
        {
            var result = UserValidation.TryParseUser("test", "", "test@test.com", ValidDateOfBirth, out _);

            Assert.IsFalse(result);
        }

        [TestMethod]
        public void TryParseUser_WhenEmailIsInvalid_ReturnsFalse()
        {
            var result = UserValidation.TryParseUser("test", "test", "test", ValidDateOfBirth, out _);

            Assert.IsFalse(result);
        }

        [TestMethod]
        public void TryParseUser_WhenUserIsUnderage_ReturnsFalse()
        {
            var result = UserValidation.TryParseUser("test", "test", "test@test.com", DateTime.Now, out _);

            Assert.IsFalse(result);
        }

        [TestMethod]
        public void TryParseUser_WhenUserIsValid_ReturnsTrueAndOutputsUser()
        {
            var result = UserValidation.TryParseUser("test1", "test2", "test@test.com", ValidDateOfBirth, out var user);

            Assert.IsTrue(result);
            Assert.IsNotNull(user);
            Assert.AreEqual("test1", user.Firstname);
            Assert.AreEqual("test2", user.Surname);
            Assert.AreEqual("test@test.com", user.EmailAddress);
            Assert.AreEqual(ValidDateOfBirth, user.DateOfBirth);
        }

        [TestMethod]
        public void IsNameValid_WhenFirstnameIsEmpty_ReturnsFalse()
        {
            var result = UserValidation.IsNameValid("", "test2");

            Assert.IsFalse(result);
        }

        [TestMethod]
        public void IsNameValid_WhenSurnameIsEmpty_ReturnsFalse()
        {
            var result = UserValidation.IsNameValid("test", "");

            Assert.IsFalse(result);
        }

        [TestMethod]
        public void IsNameValid_WhenNamesAreNotEmpty_ReturnsTrue()
        {
            var result = UserValidation.IsNameValid("test", "test");

            Assert.IsTrue(result);
        }

        [TestMethod]
        public void IsEmailValid_WhenEmailIsEmpty_ReturnsFalse()
        {
            var result = UserValidation.IsEmailValid("");

            Assert.IsFalse(result);
        }

        [TestMethod]
        public void IsEmailValid_WhenEmailIsMissingAtAndDot_ReturnsFalse()
        {
            var result = UserValidation.IsEmailValid("test");

            Assert.IsFalse(result);
        }

        [TestMethod]
        public void IsEmailValid_WhenEmailIsMissingAtButHasDot_ReturnsTrue()
        {
            var result = UserValidation.IsEmailValid("test.com");

            Assert.IsTrue(result);
        }

        [TestMethod]
        public void IsEmailValid_WhenEmailIsMissingDotButHasAt_ReturnsTrue()
        {
            var result = UserValidation.IsEmailValid("test@test");

            Assert.IsTrue(result);
        }

        [TestMethod]
        public void IsEmailValid_WhenEmailHasBothAtAndDot_ReturnsTrue()
        {
            var result = UserValidation.IsEmailValid("test@test.com");

            Assert.IsTrue(result);
        }

        [TestMethod]
        public void IsAgeAtLeastMinimum_WhenUserIsUnderMinimumAge_ReturnsFalse()
        {
            var result = UserValidation.IsAgeAtLeastMinimum(DateTime.Now);

            Assert.IsFalse(result);
        }

        [TestMethod]
        public void IsAgeAtLeastMinimum_WhenUserIsAboveMinimumAge_ReturnsTrue()
        {
            var result = UserValidation.IsAgeAtLeastMinimum(DateTime.Now.AddYears(-UserValidation.USER_MINIMUM_AGE));

            Assert.IsTrue(result);
        }

        [TestMethod]
        public void IsAgeAtLeast_WhenAgeIsZeroAndUserBornTomorrow_ReturnsFalse()
        {
            var result = UserValidation.IsAgeAtLeast(DateTime.Now.AddDays(1), 0);

            Assert.IsFalse(result);
        }

        [TestMethod]
        public void IsAgeAtLeast_WhenAgeIsZeroAndUserBornNow_ReturnsTrue()
        {
            var result = UserValidation.IsAgeAtLeast(DateTime.Now, 0);

            Assert.IsTrue(result);
        }
    }
}