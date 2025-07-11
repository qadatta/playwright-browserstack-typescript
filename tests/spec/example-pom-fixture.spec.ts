import { expect, basePage as test } from "../fixture/basePage";
test.describe.configure({ mode: 'parallel' });


test("e2e test - 1", async ({ homePage }) => {
  await homePage.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await homePage.verify();
});

test("e2e test - 2", async ({ page, homePage, installationPage }) => {
  await homePage.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  await installationPage.verify();
});

test("e2e test - 3 (failing)", async ({ homePage }) => {
  await homePage.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await homePage.verify();
  expect(false, "marking test failure for reporting").toBeTruthy(); // This will fail

});

test("e2e test - 4 (failing)", async ({ page, homePage, installationPage }) => {
  await homePage.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  await installationPage.verify();
  expect(false, "marking test failure for reporting").toBeTruthy(); // This will fail
});
