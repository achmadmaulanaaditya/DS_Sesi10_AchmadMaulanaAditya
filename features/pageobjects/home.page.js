const { $ } = require("@wdio/globals");
const Page = require("./page");

class HomePage extends Page {
  get iconCart() {
    return $(".shopping_cart_link");
  }

  get iconSort() {
    return $(".product_sort_container");
  }

  get appLogo() {
    return $(".app_logo");
  }

  get buttonRemove() {
    return $("#remove-sauce-labs-backpack");
  }

  get iconBurger() {
    return $(".bm-icon.visual_failure");
  }

  async validateHomePage() {
    await expect(browser).toHaveUrlContaining("/inventory.html");
    await expect(this.iconCart).toBeDisplayed();
  }

  async validateProblemUser() {
    await expect(browser).toHaveUrlContaining("/inventory.html");
    await expect(this.iconSort).not.toBeSelected();
  }

  async validatePerformanceUser() {
    await expect(browser).toHaveUrlContaining("/inventory.html");
    await this.appLogo.waitForDisplayed({ timeout: 500 });
    await expect(this.appLogo).toBeDisplayed();
  }

  async validateErrorUser() {
    await expect(browser).toHaveUrlContaining("/inventory.html");
    await expect(this.buttonRemove).not.toBeClickable();
  }

  async validateVisualUser() {
    await expect(browser).toHaveUrlContaining("/inventory.html");
    await expect(this.iconBurger).toBeDisplayed();
  }

  open() {
    return super.open("inventory.html");
  }
}

module.exports = new HomePage();
