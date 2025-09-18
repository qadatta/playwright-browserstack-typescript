import { test, expect } from '@playwright/test';
test.describe.configure({ mode: 'parallel' });


test.only('without-fixure e2e test - 1', async ({ page }) => {
  await page.goto('https://playwright.dev/',{timeout:60000});

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('without-fixure e2e test - 2', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('without-fixure e2e test - 3 (failing test)', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  expect(false, "marking test failure for reporting in dash").toBeTruthy(); // This will fail

});