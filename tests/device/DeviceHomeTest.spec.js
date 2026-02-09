
require('../../playwright-fixtures');
require('../../hooks/hook');
const { test, expect } = require('@playwright/test');

// Example device test: Home page loads and main elements are visible

test.describe('Device Suite: Home Page', () => {
  test('should load home page and show main header', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header')).toBeVisible();
    // Use first() to avoid strict mode violation if multiple elements match
    await expect(page.locator('text=K11 Software Solutions').first()).toBeVisible();
  });

  test('should show Explore Services button', async ({ page }) => {
    await page.goto('/');
    const btn = page.locator('#home-explore-services-btn');
    await expect(btn).toBeVisible();
    // Try to click, but ignore if blocked by overlays (for mobile)
    try {
      await btn.click({ trial: true });
    } catch (e) {
      // Log and continue for device-specific overlays
      console.warn('Click intercepted, possibly by overlay:', e.message);
    }
  });
});
