const { Given, When, Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page.js");
const HomePage = require("../pageobjects/home.page.js");

Given(/^Aditya is on the login page$/, async () => {
  await LoginPage.open();
});

When(/^Aditya login with "(.*)" credential$/, async (username) => {
  await LoginPage.login(username);
});

Then(/^Aditya should be on home page$/, async () => {
  await HomePage.validateHomePage();
});

Then(/^Aditya should see error "(.*)"$/, async (loMessage) => {
  await LoginPage.validateLockedOutUserError(loMessage);
});

Then(
  /^Aditya should be on home page but see errors with the inventory images$/,
  async () => {
    await HomePage.validateProblemUser();
  }
);

Then(
  /^Aditya should be on home page but can't click remove button$/,
  async () => {
    await HomePage.validateErrorUser();
  }
);

Then(
  /^Aditya should be on home page but the page display is scrambled$/,
  async () => {
    await HomePage.validateVisualUser();
  }
);

Then(/^Aditya should get error "(.*)"$/, async (icMessage) => {
  await LoginPage.validateInvalidCredentials(icMessage);
});
