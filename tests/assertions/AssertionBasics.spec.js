const { test, expect } = require('@playwright/test');

const DEMO_URL = 'https://demo.playwright.dev/todomvc';

test.describe('Assertion Basics', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_URL);
  });

  test('should assert page title', async ({ page }) => {
    await expect(page).toHaveTitle(/TodoMVC/);
  });

  test('should assert element is visible', async ({ page }) => {
    await expect(page.locator('.new-todo')).toBeVisible();
  });

  test('should assert element has text', async ({ page }) => {
    await page.fill('.new-todo', 'Test Item');
    await page.keyboard.press('Enter');
    await expect(page.locator('.todo-list li')).toHaveText('Test Item');
  });

  test('should assert element count', async ({ page }) => {
    await page.fill('.new-todo', 'First');
    await page.keyboard.press('Enter');
    await page.fill('.new-todo', 'Second');
    await page.keyboard.press('Enter');
    await expect(page.locator('.todo-list li')).toHaveCount(2);
  });

  test('should assert attribute value', async ({ page }) => {
    await expect(page.locator('.new-todo')).toHaveAttribute('placeholder', 'What needs to be done?');
  });

  test('should assert element is hidden', async ({ page }) => {
    await expect(page.locator('.footer')).toBeHidden(); // Footer is hidden until todos are added
  });
});
