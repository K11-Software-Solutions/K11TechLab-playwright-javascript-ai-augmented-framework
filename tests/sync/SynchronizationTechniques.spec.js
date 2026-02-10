const { test, expect } = require('@playwright/test');
const WaitIUtils = require('../../utils/WaitIUtils');

// Demo page with dynamic elements (replace with your own if needed)
const DEMO_URL = 'https://demo.playwright.dev/todomvc';

test.describe('Synchronization Techniques: Basics to Advanced', () => {
  let waitUtil;

  test.beforeEach(async ({ page }) => {
    waitUtil = new WaitIUtils(page);
    await page.goto(DEMO_URL);
  });

  test('Static wait (not recommended for real tests)', async ({ page }) => {
    await waitUtil.wait(2000); // Hard wait for 2 seconds
    expect(await page.title()).toContain('React • TodoMVC');
  });

  test('Wait for element to be visible', async ({ page }) => {
    await waitUtil.waitForVisible('.new-todo');
    await page.fill('.new-todo', 'Learn Playwright');
    await page.keyboard.press('Enter');
    await waitUtil.waitForVisible('.todo-list li');
    expect(await page.isVisible('.todo-list li')).toBe(true);
  });

  test('Wait for element to be attached to DOM', async ({ page }) => {
    await waitUtil.waitForAttached('.new-todo');
    await page.fill('.new-todo', 'Wait for attach');
    await page.keyboard.press('Enter');
    await waitUtil.waitForAttached('.todo-list li');
    expect(await page.isVisible('.todo-list li')).toBe(true);
  });

  test('Wait for element to be hidden', async ({ page }) => {
    await waitUtil.waitForVisible('.new-todo');
    await page.fill('.new-todo', 'Hide me');
    await page.keyboard.press('Enter');
    await waitUtil.waitForVisible('.todo-list li');
    // Hover over the todo item to reveal the .destroy button
    await page.hover('.todo-list li');
    await page.click('.destroy');
    await waitUtil.waitForHidden('.todo-list li');
    expect(await page.isVisible('.todo-list li')).toBe(false);
  });

  test('Advanced: Wait for network idle', async ({ page }) => {
    // Reload and wait for network to be idle
    await Promise.all([
      page.waitForLoadState('networkidle'),
      page.reload(),
    ]);
    expect(await page.title()).toContain('React • TodoMVC');
  });

  test('Advanced: Wait for custom condition', async ({ page }) => {
    // Wait until there are at least 2 todos
    await waitUtil.waitForVisible('.new-todo');
    await page.fill('.new-todo', 'First');
    await page.keyboard.press('Enter');
    await page.fill('.new-todo', 'Second');
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => document.querySelectorAll('.todo-list li').length >= 2);
    const count = await page.locator('.todo-list li').count();
    expect(count).toBeGreaterThanOrEqual(2);
  });
});
