using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace LegacyApp.Tests
{
    [TestClass]
    public class CreditCheckServiceTests
    {
        [TestMethod]
        public void SkipCreditCheck_WhenClientIsVeryImportant_ReturnsTrue()
        {
            var result = ClientCredit.SkipCreditCheck(new Client
            {
                Name = "VeryImportantClient"
            });

            Assert.IsTrue(result);
        }

        [TestMethod]
        public void SkipCreditCheck_WhenClientIsImportant_ReturnsFalse()
        {
            var result = ClientCredit.SkipCreditCheck(new Client
            {
                Name = "ImportantClient"
            });

            Assert.IsFalse(result);
        }

        [TestMethod]
        public void DoubleCreditLimitOnCheck_WhenClientIsVeryImportant_ReturnsFalse()
        {
            var result = ClientCredit.DoubleCreditLimitOnCheck(new Client
            {
                Name = "VeryImportantClient"
            });

            Assert.IsFalse(result);
        }

        [TestMethod]
        public void DoubleCreditLimitOnCheck_WhenClientIsImportant_ReturnsTrue()
        {
            var result = ClientCredit.DoubleCreditLimitOnCheck(new Client
            {
                Name = "ImportantClient"
            });

            Assert.IsTrue(result);
        }
    }
}