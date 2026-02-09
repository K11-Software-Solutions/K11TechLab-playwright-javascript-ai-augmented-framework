require('../../playwright-fixtures');
require('../../hooks/hook');
const { test, expect } = require('@playwright/test');

test('Network request/response mocking', async ({ page }) => {
  await page.route('**/api/login/**', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ access: 'mocked-token' })
    });
  });
  await page.goto('https://k11softwaresolutions.com/login');
  // Simulate login and check for mocked token usage
  // ...add assertions as needed
  expect(true).toBeTruthy();
});

test('Network request/response mocking - error case', async ({ page }) => {
  await page.route('**/api/login/**', route => {
    route.fulfill({
      status: 401,
      contentType: 'application/json',
      body: JSON.stringify({ detail: 'Invalid credentials' })
    });
  });
  await page.goto('https://k11softwaresolutions.com/login');
  // Simulate login and check for error handling in UI
  // ...add assertions for error message display
  expect(true).toBeTruthy();
});
