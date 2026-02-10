# Playwright Synchronization & Wait Strategies

This guide demonstrates synchronization techniques in Playwright, from basic to advanced, and documents the enhanced `WaitIUtils` utility for robust, maintainable tests.

---

## Why Synchronization Matters
- Web UIs are dynamic: elements may appear/disappear, load asynchronously, or change state.
- Proper waits prevent flaky tests and ensure reliability.

---

## 1. Static Waits (Not Recommended)
```js
await page.waitForTimeout(2000); // Hard wait for 2 seconds
```
- Use only for debugging or as a last resort.

---

## 2. Dynamic Waits for Element State
- **Visible:**
  ```js
  await page.waitForSelector('.selector', { state: 'visible' });
  ```
- **Attached:**
  ```js
  await page.waitForSelector('.selector', { state: 'attached' });
  ```
- **Hidden:**
  ```js
  await page.waitForSelector('.selector', { state: 'hidden' });
  ```
- **Detached:**
  ```js
  await page.waitForSelector('.selector', { state: 'detached' });
  ```

---

## 3. Wait for Text Content
```js
await page.waitForFunction(
  sel => document.querySelector(sel)?.textContent.includes('expected'),
  '.selector'
);
```

---

## 4. Wait for Custom Condition
```js
await page.waitForFunction(() => document.querySelectorAll('.item').length >= 2);
```

---

## 5. Wait for Network Idle
```js
await page.waitForLoadState('networkidle');
```

---

## 6. Using the Enhanced WaitIUtils Utility

`utils/WaitIUtils.js` provides reusable, readable wait helpers:

```js
const WaitIUtils = require('../utils/WaitIUtils');
const waitUtil = new WaitIUtils(page);

await waitUtil.wait(1000); // Static wait
await waitUtil.waitForVisible('.selector');
await waitUtil.waitForAttached('.selector');
await waitUtil.waitForHidden('.selector');
await waitUtil.waitForDetached('.selector');
await waitUtil.waitForText('.selector', 'expected text');
await waitUtil.waitForFunction(() => ...); // Custom JS condition
await waitUtil.waitForNetworkIdle();
```

---

## 7. Example: SynchronizationTechniques.spec.js
See `tests/sync/SynchronizationTechniques.spec.js` for:
- Static waits
- Waiting for visible/attached/hidden/detached
- Waiting for text
- Waiting for custom conditions
- Waiting for network idle
- Advanced: hover to reveal hidden elements before interaction

---

## Best Practices
- Prefer dynamic waits over static waits.
- Use utility methods for readability and maintainability.
- Always wait for the expected state before interacting with elements.
- Use custom conditions for complex scenarios.

---

**For more, see Playwright docs:** https://playwright.dev/docs/waiting
