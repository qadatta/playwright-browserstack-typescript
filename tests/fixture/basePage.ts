import test from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { InstallationPage } from "../pages/installationPage";

type MyFixture = {
  homePage: HomePage;
  installationPage: InstallationPage;
};

export const basePage = test.extend<MyFixture>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  installationPage: async ({ page }, use) => {
    await use(new InstallationPage(page));
  },
});

export { expect } from '@playwright/test';

