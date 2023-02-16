# Refactoring test in C#

## Description

You are asked to refactor the UserService class and more specifically its AddUser method. Assume that the code is correct in terms of business logic and only focus on applying clean code principles. Keep in mind acronyms such as SOLID, KISS, DRY and YAGNI.

Try to keep this exercise below 2 hours. If you still have things you can improve after the 2 hour mark, please write them down and we will take them into account.

## Limitations

The Program.cs class in the LegacyApp.Consumer shall NOT CHANGE AT ALL. This includes using statements. Assume that this codebase is part of a greater system and any non-backwards compatible change will break the system. Any sort of change in that class will result in you instantly failing this test.

You can change anything in the LegacyApp project except for the UserDataAccess class and its AddUser method. Both the class and the method NEED to stay static.

## Notes

I would've liked to implement some more tests for the project, but I couldn't think of a sensible way to introduce the dependency injection required to create good mocks of services like `UserCreditService` in time. 

I could introduce a new DI layer, similar to `Microsoft.Extewnsions.DependencyInjection`, using `IHost` (see an example [here](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection-usage)), but I didn't think it was a good idea to do that in a library.

I also would've liked to update the .NET version, but didn't want to risk changes to `LegacyApp.Consumer`
