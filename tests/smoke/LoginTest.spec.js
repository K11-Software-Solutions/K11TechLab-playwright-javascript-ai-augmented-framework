require('../../playwright-fixtures');
const { test, expect } = require('@playwright/test');
const path = require('path');
const DataProvider = require('../../utils/DataProvider');

const csvPath = path.join(__dirname, '../../testdata/login_data.csv');
const rows = DataProvider.fetchDataFromCsv(csvPath);

test.describe('Login CSV Data Driven', () => {
  for (const { testName, username, password, expected } of rows) {
    test(`${testName} (${username})`, async ({ page }) => {
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
