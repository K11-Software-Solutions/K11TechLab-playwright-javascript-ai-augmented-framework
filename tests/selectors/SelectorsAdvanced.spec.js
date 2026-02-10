
require('../../playwright-fixtures');
const { test, expect } = require('@playwright/test');
const LocatorsLabPage = require('../../pages/LocatorsLabPage');

// Advanced Selectors Test Suite (using Locators Lab)
test.describe('Selectors Advanced (Locators Lab)', () => {
  test('should select element by text and partial text', async ({ page }) => {
    const lab = new LocatorsLabPage(page);
    await lab.goto();
    // Exact text
    await expect(page.getByText('Sandbox Area')).toBeVisible();
    // Partial text
    await expect(page.locator('text=Practice Lab')).toBeVisible();
    // Section by text
    await expect(lab.title).toBeVisible();
  });

  test('should select element by CSS and XPath', async ({ page }) => {
    const lab = new LocatorsLabPage(page);
    await lab.goto();
    // CSS selector for the main title
    await expect(lab.title).toBeVisible();
    // XPath selector for the Sandbox Area section
    await expect(page.locator('//h2[contains(text(),"Sandbox Area")]')).toBeVisible();
  });

  test('should select nth element and filter by attribute', async ({ page }) => {
    const lab = new LocatorsLabPage(page);
    await lab.goto();
    // Nth element: Example with action buttons
    const actionButtons = lab.actionButtons.locator('button');
    await expect(actionButtons.nth(0)).toBeVisible();
    // Attribute filter: Example with input fields
    await expect(page.locator('input[id*="user"]').first()).toBeVisible();
  });

  test('should select element inside shadow DOM', async ({ page }) => {
    const lab = new LocatorsLabPage(page);
    await lab.goto();
    // Check the Shadow DOM section is visible
    await expect(lab.sandboxShadowSection).toBeVisible();
    // Example: If you know the shadow host/tag, use:
    // await expect(page.locator('k11-shadow-root >>> .shadow-element')).toBeVisible();
  });

  test('should select element by role and label', async ({ page }) => {
    const lab = new LocatorsLabPage(page);
    await lab.goto();
    // Example: Find the Run button by role
    await expect(page.getByRole('button', { name: /run/i })).toBeVisible();
    // Find the Clear button by role
    await expect(page.getByRole('button', { name: /clear/i })).toBeVisible();
  });

  test('should select element inside iframe', async ({ page }) => {
    const lab = new LocatorsLabPage(page);
    await lab.goto();
    // Check the iframe section is visible
    await expect(lab.sandboxIframeSection).toBeVisible();
    // Interact with the iframe using frameLocator
    // Check for the Iframe Lab heading
    await expect(lab.iframe.locator('h3', { hasText: 'Iframe Lab' })).toBeVisible();
    // Check for the note with data-k11="iframe-note"
    await expect(lab.iframe.locator('[data-k11="iframe-note"]')).toBeVisible();
    // Check for the email input
    await expect(lab.iframe.locator('input#ifEmail')).toBeVisible();
    // Check for the Orders table
    await expect(lab.iframe.locator('table[aria-label="Orders"]')).toBeVisible();
    // Check for a specific order row
    await expect(lab.iframe.locator('td', { hasText: '#A-101' })).toBeVisible();
  });
});
