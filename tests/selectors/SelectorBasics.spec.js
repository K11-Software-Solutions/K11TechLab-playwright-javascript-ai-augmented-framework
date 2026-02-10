const { test, expect } = require('@playwright/test');

const DEMO_URL = 'https://demo.playwright.dev/todomvc';

test.describe('Selector Basics', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_URL);
  });

  test('CSS selector', async ({ page }) => {
    await expect(page.locator('.new-todo')).toBeVisible();
  });

  test('Text selector', async ({ page }) => {
    await expect(page.getByText('todos')).toBeVisible();
  });

  test('Role selector', async ({ page }) => {
    await expect(page.getByRole('textbox', { name: '' })).toBeVisible();
  });

  test('Chained selector', async ({ page }) => {
    await page.fill('.new-todo', 'Chained');
    await page.keyboard.press('Enter');
    await expect(page.locator('.todo-list').locator('li')).toHaveText('Chained');
  });

  test('Nth selector', async ({ page }) => {
    await page.fill('.new-todo', 'First');
    await page.keyboard.press('Enter');
    await page.fill('.new-todo', 'Second');
    await page.keyboard.press('Enter');
    await expect(page.locator('.todo-list li').nth(1)).toHaveText('Second');
  });

  test('Attribute selector', async ({ page }) => {
    await expect(page.locator('input[placeholder="What needs to be done?"]')).toBeVisible();
  });
});
