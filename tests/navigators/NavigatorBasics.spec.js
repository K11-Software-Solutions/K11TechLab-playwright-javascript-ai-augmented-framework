const { test, expect } = require('@playwright/test');

const DEMO_URL = 'https://demo.playwright.dev/todomvc';

// Example navigation tests

test.describe('Navigator Basics', () => {
  test('should navigate to homepage and verify title', async ({ page }) => {
    await page.goto(DEMO_URL);
    await expect(page).toHaveTitle(/TodoMVC/);
  });

  test('should reload page and verify state', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.reload();
    await expect(page).toHaveTitle(/TodoMVC/);
  });

  test('should go back and forward in history', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.fill('.new-todo', 'First');
    await page.keyboard.press('Enter');
    await page.goto('https://playwright.dev');
    await page.goBack();
    await expect(page).toHaveURL(/todomvc\/\#\//);
    await page.goForward();
    await expect(page).toHaveURL('https://playwright.dev');
  });

  test('should wait for navigation after action', async ({ page }) => {
    await page.goto(DEMO_URL);
    // Example: click a link that triggers navigation (not present in demo, so simulate)
    await Promise.all([
      page.waitForNavigation(),
      page.evaluate(() => window.location.href = 'https://playwright.dev'),
    ]);
    await expect(page).toHaveURL('https://playwright.dev');
  });
});
