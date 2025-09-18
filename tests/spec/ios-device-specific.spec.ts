import { expect, basePage as test } from "../fixture/basePage";
test.describe.configure({ mode: 'parallel' });


test("ios test - 1", async ({ homePage, page, context }) => {
  await context.addCookies([
    { name: 'x-pd-client-name', value: 'pd-automation', path: "/", domain: "searspartsdirect.com" },
  ]);
  await homePage.goto("https://www.searspartsdirect.com/");
  await homePage.verify();
  await page.waitForTimeout(30000); // Wait for 20 seconds so that random modal  appears  
  let globalSearchTextField = page.locator("#downshift-0-input");


  await globalSearchTextField.clear();
  await globalSearchTextField.pressSequentially("9030", {
    delay: 50,
  });
});

