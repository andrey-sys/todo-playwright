// @ts-check
const { test, expect } = require('@playwright/test');

test('create new todo', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/#/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React • TodoMVC/);
});


