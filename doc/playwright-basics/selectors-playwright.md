# Playwright Selectors Guide

This guide covers the basics and best practices for using selectors in Playwright tests.

---

## Why Selectors Matter
- Selectors identify elements for interaction and assertion.
- Robust selectors make tests reliable and maintainable.

---

## Common Selector Types

### 1. CSS Selector
```js
await page.locator('.new-todo');
```

### 2. Text Selector
```js
await page.getByText('todos');
```

### 3. Role Selector
```js
await page.getByRole('textbox', { name: '' });
```

### 4. Chained Selector
```js
await page.locator('.todo-list').locator('li');
```

### 5. Nth Selector
```js
await page.locator('.todo-list li').nth(1);
```

### 6. Attribute Selector
```js
await page.locator('input[placeholder="What needs to be done?"]');
```

---

## Advanced Selector Strategies
- Use data-testid or data-role attributes for stable selectors.
- Combine selectors for complex queries:
  ```js
  await page.locator('.parent .child[data-active="true"]');
  ```
- Use Playwright's built-in selector engines for flexibility.

---

## Best Practices
- Prefer stable, unique selectors (avoid brittle ones).
- Use role and text selectors for accessibility and clarity.
- Chain selectors for scoped queries.
- Avoid using index-based selectors unless necessary.

---

## Example Suite
See `tests/selectors/SelectorBasics.spec.js` for practical selector examples.

---

**For more, see Playwright docs:** https://playwright.dev/docs/selectors
