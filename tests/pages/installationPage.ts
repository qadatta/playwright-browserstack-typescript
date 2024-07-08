import { test, type Page, type Locator, expect } from "@playwright/test";

export class InstallationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to Home page (base url)
   */
  async goto(url: string) {
    url;
  }

  /**
   * Verify home page loaded
   */
  async verify() {
    await test.step(`verify installation page is loaded`, async () => {
      await expect(this.page).toHaveTitle(/Installation/, { timeout: 30000 });
    });
  }
}
