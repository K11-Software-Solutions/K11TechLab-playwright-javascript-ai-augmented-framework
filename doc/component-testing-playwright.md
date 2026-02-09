# Component Testing with Playwright

## Introduction
Playwright Component Testing (CT) allows you to test individual UI components in isolation, providing fast feedback and confidence in your React (or other framework) components. It runs your components in a real browser, simulating user interactions and verifying UI behavior.

## Why Use Playwright CT?
- Test components in isolation, outside of full app context
- Fast feedback loop for UI changes
- Supports real browser rendering and user events
- Integrates with Playwright's powerful test runner, fixtures, and hooks

## Getting Started

### 1. Install Dependencies
```
npm install -D @playwright/experimental-ct-react @playwright/test
```

### 2. Create Playwright CT Config
Create `playwright-ct.config.js` in your project root:
```js
const { defineConfig } = require('@playwright/experimental-ct-react');

module.exports = defineConfig({
  testDir: './tests/components',
  use: {
    viewport: { width: 1280, height: 720 },
  },
});
```

### 3. Add a Template and Mount Helper
Create `playwright/index.html`:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Playwright CT</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./index.jsx"></script>
  </body>
</html>
```

Create `playwright/index.jsx`:
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

export function mount(component) {
  const root = document.getElementById('root');
  ReactDOM.createRoot(root).render(component);
}
```

### 4. Write a Component Test
Example: `tests/components/HeroCarousel.spec.jsx`
```jsx
import { test, expect } from '@playwright/experimental-ct-react';
import HeroCarousel from '../../components/HeroCarousel.jsx';

// Mock data for the carousel
const mockSlides = [
  { image: 'data:image/png;base64,iVBORw0K...', title: 'Tech Lab', description: 'Explore technology trends.' },
  { image: 'data:image/png;base64,iVBORw0K...', title: 'Insights', description: 'Get actionable insights.' },
];

test('renders and cycles slides', async ({ mount }) => {
  // Mount the component with mock slides and a short interval
  const component = await mount(<HeroCarousel slides={mockSlides} intervalMs={200} />);

  // Assert the first slide is visible
  await expect(component.getByRole('heading', { name: 'Tech Lab' })).toBeVisible();

  // Wait for the second slide to appear
  await expect(component.getByRole('heading', { name: 'Insights' })).toBeVisible({ timeout: 2000 });

  // Optionally, check the description text
  await expect(component.getByText('Get actionable insights.')).toBeVisible();
});

// You can add beforeEach/afterEach hooks for setup/teardown
test.beforeEach(async () => {
  // Setup logic, e.g., reset mocks or log
});
```

### 5. Run Component Tests
```
npx playwright test -c playwright-ct.config.js
```

## Advanced: Fixtures and Hooks
- Use Playwright's fixtures for shared data and utilities
- Add hooks (beforeEach, afterEach) for setup/teardown
- Integrate with custom reporting (e.g., Allure)

## Tips
- Use mock data for isolated component tests
- Add global CSS or Tailwind imports in `playwright/index.jsx` if needed
- Use Playwright's debugging tools (e.g., --debug, --headed)

## References
- [Playwright Component Testing Docs](https://playwright.dev/docs/test-components)
- [Playwright Test Runner](https://playwright.dev/docs/test-intro)

---
Happy testing!
