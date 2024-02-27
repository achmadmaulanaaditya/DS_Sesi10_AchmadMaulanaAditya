const { $ } = require("@wdio/globals");
const Page = require("./page");

class LoginPage extends Page {
  get fieldUsername() {
    return $("#user-name");
  }

  get fieldPassword() {
    return $("#password");
  }

  get buttonLogin() {
    return $("#login-button");
  }

  invalidCredentials = (icMessage) => $(`//h3[text()="${icMessage}"]`);

  get usernameRequired() {
    return $('//h3[text()="Epic sadface: Username is required"]');
  }

  get passwordRequired() {
    return $('//h3[text()="Epic sadface: Password is required"]');
  }

  errorLockedOutUser = (loMessage) => $(`//h3[text()="${loMessage}"]`);

  async login(username) {
    await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
    await this.fieldUsername.setValue(username);
    await this.fieldPassword.setValue(process.env.PASSWORD_SECRETSAUCE);
    await this.buttonLogin.click();
  }

  async validateInvalidCredentials(icMessage) {
    await expect(this.invalidCredentials(icMessage)).toBeDisplayed();
  }

  async validateEmptyUsername() {
    await expect(this.usernameRequired).toBeDisplayed();
  }

  async validateEmptyPassword() {
    await expect(this.passwordRequired).toBeDisplayed();
  }

  async validateLockedOutUserError(loMessage) {
    await this.errorLockedOutUser(loMessage).waitForDisplayed({
      timeout: 2500,
    });
    await expect(this.errorLockedOutUser(loMessage)).toBeDisplayed();
  }

  open() {
    return super.open("/");
  }
}

module.exports = new LoginPage();
