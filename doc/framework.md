# K11TechLab Playwright Automation Framework

## Overview

K11TechLab is a robust, real-world Playwright automation framework designed for modern SaaS web applications. It demonstrates best practices in UI automation, advanced reporting, artifact management, and API testing, supporting both E2E and component-level testing for React applications.

---

## Key Features

- **Page Object Model (POM):** Clean abstraction for UI automation.
- **Component Testing:** Playwright CT for React components (QuickActions, Card, HeroCarousel).
- **E2E Flows:** Advanced user journeys, data-driven and smoke test flows.
- **API Testing:** Built-in Playwright APIRequestContext, with response artifact saving.
- **Visual Regression:** Automated screenshot comparison for UI/components.
- **Custom Fixtures & Hooks:** Screenshots, video capture, and advanced reporting (Allure, HTML).
- **Network Mocking:** Request interception for robust test scenarios.
- **CI/CD Friendly:** Scalable structure, easy integration.
- **Documentation:** In-code comments, README, and /doc articles.

---

## Project Structure

```
K11TechLab-playwright-javascript-ai-augmented-framework/
│
├── artifacts/              # Locator maps, screenshots, test artifacts
├── components/             # React UI components
├── hooks/                  # Test hooks (before/after logic)
├── pages/                  # Page Object Model (POM) classes
├── tests/                  # Test specs (smoke, regression, component, API)
├── utils/                  # Utilities (actions, waits, data, etc.)
├── apiresponse/            # Saved API responses (JSON)
├── doc/                    # Documentation articles
├── playwright.config.js    # Playwright config
├── playwright-ct.config.js # Playwright CT config
├── package.json            # Project dependencies
└── README.md
```

---

## Test Types Supported

- **E2E UI Tests:** Full user journeys, navigation, forms, business logic
- **Component Tests:** Isolated React component validation (CT)
- **API Tests:** REST endpoint validation, chaining with UI flows
- **Visual Regression:** Screenshot comparison for UI/components
- **Data-driven & Smoke Tests:** Fast feedback for critical flows

---

## Artifacts & Reporting

- **Screenshots:** For every test and individual card/component
- **Videos:** For selected tests
- **Allure & HTML Reports:** Rich test evidence
- **API Responses:** Saved as JSON for traceability

---

## Best Practices

- No hard-coded waits (auto-waiting)
- Assertions in tests, not page objects
- Reusable logic in utilities
- Realistic user flows
- Scalable, maintainable structure

---

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run all tests:
   ```bash
   npx playwright test
   ```
3. Run component tests:
   ```bash
   npx playwright test -c playwright-ct.config.js
   ```
4. Run API tests:
   ```bash
   npx playwright test tests/api/JSONPlaceholderAPITests.spec.js
   ```

---

## Extending the Framework

- Add new page objects in `/pages`
- Add new components in `/components`
- Add new tests in `/tests`
- Add utilities in `/utils`
- Update documentation in `/doc` and `README.md`

---

## Authors & Contact

- Maintained by K11 Tech QA Team
- For support: k11softwaresolutions@gmail.com
- Website: https://k11softwaresolutions.com

---

*See README.md and other /doc articles for more details and advanced usage.*
