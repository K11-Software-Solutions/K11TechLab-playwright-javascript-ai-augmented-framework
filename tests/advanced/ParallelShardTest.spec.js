
require('../../playwright-fixtures');
require('../../hooks/hook');
const { test, expect } = require('@playwright/test');

test.describe('Parallel Sharding Example', () => {
  for (let i = 1; i <= 6; i++) {
    test(`shard test ${i}`, async ({ page }) => {
      await page.goto('https://k11softwaresolutions.com');
      await expect(page).toHaveTitle(/K11 Software Solutions/);
    });
  }
});
// To run with sharding: npx playwright test tests/advanced/ParallelShardTest.spec.js --shard=1/2
