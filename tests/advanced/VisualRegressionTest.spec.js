
require('../../playwright-fixtures');
require('../../hooks/hook');
const { test, expect } = require('@playwright/test');

test('Visual regression: home page', async ({ page }) => {
  await page.goto('https://k11softwaresolutions.com');
  expect(await page.screenshot()).toMatchSnapshot('home-page.png', { threshold: 0.2 });
});
// Place baseline snapshot in tests/advanced/__snapshots__/home-page.png after first run
