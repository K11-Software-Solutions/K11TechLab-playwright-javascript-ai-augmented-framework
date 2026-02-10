# Playwright Advanced Navigation Guide

This guide demonstrates advanced navigation scenarios in Playwright, including login-driven navigation, multi-tab handling, query params/fragments, error handling, and DOM content waits.

---

## 1. Login-Driven Navigation (Data-Driven)
- Uses CSV data for login credentials
- Navigates to dashboard on success, shows error on failure

```js
const path = require('path');
const DataProvider = require('../../utils/DataProvider');
const csvPath = path.join(__dirname, '../../testdata/login_data.csv');
const rows = DataProvider.fetchDataFromCsv(csvPath);

test.describe('Login Navigation Scenario', () => {
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
```

---

## 2. Multiple Tabs/Windows
```js
const context = await browser.newContext();
const page1 = await context.newPage();
await page1.goto(DEMO_URL);
const page2 = await context.newPage();
await page2.goto('https://playwright.dev');
await expect(page1).toHaveTitle(/TodoMVC/);
await expect(page2).toHaveTitle(/Playwright/);
```

---

## 3. Navigation with Query Params and Fragments
```js
await page.goto(DEMO_URL + '?foo=bar#section');
await expect(page).toHaveURL(/\?foo=bar#section/);
```

---

## 4. Navigation Error Handling
```js
let error;
try {
  await page.goto('https://nonexistent.playwright.dev');
} catch (e) {
  error = e;
}
expect(error).toBeDefined();
expect(error.message).toContain('ERR_NAME_NOT_RESOLVED');
```

---

## 5. Wait for Navigation and DOM Content Loaded
```js
await Promise.all([
  page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
  page.reload(),
]);
await expect(page).toHaveTitle(/TodoMVC/);
```

---

## Best Practices
- Use data-driven login for real-world navigation flows
- Handle navigation errors gracefully
- Use waitForNavigation for actions that trigger navigation
- Manage multiple tabs/windows for complex scenarios

---

**For more, see Playwright docs:** https://playwright.dev/docs/navigation
