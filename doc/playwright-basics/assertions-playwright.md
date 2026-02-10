# Playwright Assertions Guide

This guide covers the basics and best practices for using assertions in Playwright tests.

---

## Why Assertions Matter
- Assertions validate expected outcomes in your tests.
- They ensure your app behaves as intended and catch regressions early.

---

## Common Assertion Types

### 1. Page Title
```js
await expect(page).toHaveTitle(/TodoMVC/);
```

### 2. Element Visibility
```js
await expect(page.locator('.new-todo')).toBeVisible();
```

### 3. Element Text
```js
await expect(page.locator('.todo-list li')).toHaveText('Test Item');
```

### 4. Element Count
```js
await expect(page.locator('.todo-list li')).toHaveCount(2);
```

### 5. Attribute Value
```js
await expect(page.locator('.new-todo')).toHaveAttribute('placeholder', 'What needs to be done?');
```

### 6. Element Hidden
```js
await expect(page.locator('.footer')).toBeHidden();
```

---

## Advanced Assertions
- Use `.not` for negative assertions:
  ```js
  await expect(page.locator('.error')).not.toBeVisible();
  ```
- Combine assertions for complex checks:
  ```js
  await expect(page.locator('.todo-list li')).toHaveText(['First', 'Second']);
  ```

---

## Best Practices
- Use Playwright's built-in expect for reliability.
- Prefer specific assertions (e.g., toHaveText, toHaveCount) over generic ones.
- Assert before and after actions to validate state changes.
- Keep assertions clear and descriptive.

---

## Example Suite
See `tests/assertions/AssertionBasics.spec.js` for practical assertion examples.

---

**For more, see Playwright docs:** https://playwright.dev/docs/test-assertions
