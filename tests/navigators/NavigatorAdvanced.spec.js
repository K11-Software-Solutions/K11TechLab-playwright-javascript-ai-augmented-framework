require('../../playwright-fixtures');
const { test, expect } = require('@playwright/test');

const DEMO_URL = 'https://demo.playwright.dev/todomvc';

// Advanced navigation scenarios

test.describe('Navigator Advanced', () => {
  test('should handle multiple tabs/windows', async ({ browser }) => {
    // Use headed mode for reliable screenshots
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

    const page1 = await context.newPage();
    await page1.goto('https://k11softwaresolutions.com', { waitUntil: 'networkidle' });
    await page1.waitForLoadState('networkidle');
    await page1.waitForSelector('#home-hero-title', { state: 'visible', timeout: 10000 });
    await page1.waitForTimeout(2000);
    await page1.screenshot({ path: 'screenshots/NavigatorAdvanced.spec/multi-tab/multi-tab-home.png', fullPage: true });
    await page1.locator('#home-hero-title').screenshot({ path: 'screenshots/multi-tab-home-element.png' });

    const page2 = await context.newPage();
    await page2.goto('https://k11softwaresolutions.com/contact', { waitUntil: 'networkidle' });
    await page2.waitForLoadState('networkidle');
    await page2.waitForSelector('body', { state: 'visible', timeout: 10000 });
    await page2.waitForTimeout(2000);
    await page2.screenshot({ path: 'screenshots/NavigatorAdvanced.spec/multi-tab/multi-tab-contact.png', fullPage: true });

    const page3 = await context.newPage();
    await page3.goto('https://k11softwaresolutions.com/services', { waitUntil: 'networkidle' });
    await page3.waitForLoadState('networkidle');
    await page3.waitForSelector('body', { state: 'visible', timeout: 10000 });
    await page3.waitForTimeout(2000);
    await page3.screenshot({ path: 'screenshots/NavigatorAdvanced.spec/multi-tab/multi-tab-services.png', fullPage: true });

    await expect(page1.locator('#home-hero-title')).toBeVisible();
    await expect(page2).toHaveURL(/contact/);
    await expect(page3).toHaveURL(/services/);
    await page1.close();
    await page2.close();
    await page3.close();
    await context.close();
  });

  const path = require('path');
  const DataProvider = require('../../utils/DataProvider');
  const csvPath = path.join(__dirname, '../../testdata/login_data.csv');
  const rows = DataProvider.fetchDataFromCsv(csvPath);
  test.describe('Login Navigation Scenario', () => {
    for (const { testName, username, password, expected } of rows) {
      test(`Advanced Login Navigation: ${testName} (${username})`, async ({ page }) => {
        await page.goto('/login');
        await page.fill('#login-username', username);
        await page.fill('#login-password', password);
        await page.click('#login-submit');
        if (expected === 'success') {
          await expect(page).toHaveURL(/dashboard/);
        } else {
          await expect(page.locator('#login-error')).toContainText('Invalid login credentials. Please check your username and password.');
        }
      });
    }
  });

  test('should handle navigation with query params and fragments', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.goto(DEMO_URL + '?foo=bar#section');
    await expect(page).toHaveURL(/\?foo=bar#section/);
  });

  test('should handle navigation errors gracefully', async ({ page }) => {
    let error;
    try {
      await page.goto('https://nonexistent.playwright.dev');
    } catch (e) {
      error = e;
      // Capture screenshot on navigation error
      await page.screenshot({ path: 'screenshots/navigation-error.png', fullPage: true });
    }
    expect(error).toBeDefined();
    // Accept broader error message for cross-browser compatibility
    expect(error.message).toMatch(/Could not resolve hostname|ERR_NAME_NOT_RESOLVED|net::ERR_NAME_NOT_RESOLVED/);
  });

  test('should wait for navigation and DOM content loaded', async ({ page }) => {
    await page.goto(DEMO_URL);
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      page.reload(),
    ]);
    await expect(page).toHaveTitle(/TodoMVC/);
  });
});
