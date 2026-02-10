# Playwright Advanced Selectors Guide

This guide demonstrates advanced selector strategies in Playwright using the Locators Lab page. These examples help you robustly target elements in complex UIs, including shadow DOM and iframes.

## Covered Selector Strategies
- **Text and Partial Text**: Locate elements by their visible text or a substring.
- **CSS and XPath**: Use CSS selectors and XPath expressions for precise targeting.
- **Nth Element and Attribute**: Select elements by index or filter by attributes.
- **Role and Label**: Use ARIA roles and accessible names for robust, semantic selection.
- **Shadow DOM**: Target elements inside open shadow roots.
- **Iframe**: Interact with elements inside embedded iframes.

## Example Test Cases

```js
const { test, expect } = require('@playwright/test');
const LocatorsLabPage = require('../../pages/LocatorsLabPage');

test.describe('Selectors Advanced (Locators Lab)', () => {
  test('should select element by text and partial text', async ({ page }) => {
    const lab = new LocatorsLabPage(page);
    await lab.goto();
    await expect(page.getByText('Sandbox Area')).toBeVisible();
    await expect(page.locator('text=Practice Lab')).toBeVisible();
    await expect(lab.title).toBeVisible();
  });

  test('should select element by CSS and XPath', async ({ page }) => {
    const lab = new LocatorsLabPage(page);
    await lab.goto();
    await expect(lab.title).toBeVisible();
    await expect(page.locator('//h2[contains(text(),"Sandbox Area")]')).toBeVisible();
  });

  test('should select nth element and filter by attribute', async ({ page }) => {
    const lab = new LocatorsLabPage(page);
    await lab.goto();
    const actionButtons = lab.actionButtons.locator('button');
    await expect(actionButtons.nth(0)).toBeVisible();
    await expect(page.locator('input[id*="user"]').first()).toBeVisible();
  });

  test('should select element inside shadow DOM', async ({ page }) => {
    const lab = new LocatorsLabPage(page);
    await lab.goto();
    await expect(lab.sandboxShadowSection).toBeVisible();
    // Example: page.locator('k11-shadow-root >>> .shadow-element')
  });

  test('should select element by role and label', async ({ page }) => {
    const lab = new LocatorsLabPage(page);
    await lab.goto();
    await expect(page.getByRole('button', { name: /run/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /clear/i })).toBeVisible();
  });

  test('should select element inside iframe', async ({ page }) => {
    const lab = new LocatorsLabPage(page);
    await lab.goto();
    await expect(lab.sandboxIframeSection).toBeVisible();
    await expect(lab.iframe.locator('h3', { hasText: 'Iframe Lab' })).toBeVisible();
    await expect(lab.iframe.locator('div > p')).toBeVisible();
    await expect(lab.iframe.locator('input#ifEmail')).toBeVisible();
    await expect(lab.iframe.locator('table[aria-label="Orders"]')).toBeVisible();
    await expect(lab.iframe.locator('td', { hasText: '#A-101' })).toBeVisible();
  });
});
```

## Best Practices
- Prefer role and label selectors for accessibility and resilience.
- Use page objects (like `LocatorsLabPage`) to centralize and maintain selectors.
- For shadow DOM, use the `>>>` combinator.
- For iframes, use `frameLocator` and assert on elements inside the frame.
- Always validate selectors against the current DOM structure.

---
For more, see the Playwright [Selectors documentation](https://playwright.dev/docs/selectors).
