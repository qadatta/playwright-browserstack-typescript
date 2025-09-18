import { test, type Page, type Locator, expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to Home page (base url)
   */
  async goto(url: string) {
    await this.page.goto(url);
  }

  /**
   * Verify home page loaded
   */
  async verify() {
    await test.step(`verify Home page is loaded`, async () => {
      await expect(this.page).toHaveTitle(/Appliance Parts | Replacement Water Filters | Lawn & Garden Repair Parts/, { timeout: 30000 });
    });
  }
}
