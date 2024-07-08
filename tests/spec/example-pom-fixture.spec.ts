import { basePage as test } from "../fixture/basePage";

test("has title", async ({ homePage }) => {
  await homePage.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await homePage.verify();
});

test("get started link", async ({ page, homePage, installationPage }) => {
  await homePage.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  await installationPage.verify();
});
