<p align="center">
    <img src="artifacts/assets/k11_logo.png" alt="K11 Software Solutions Logo" height="60" style="margin-right:20px;vertical-align:middle;"/>
    <img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright Logo" height="60" style="margin-right:20px;vertical-align:middle;"/>
    <img src="artifacts/assets/javascript-logo.svg" alt="JavaScript Logo" height="60" style="margin-right:20px;vertical-align:middle;"/>
</p>

# K11TechLab Playwright Automation – K11 Software Solutions

A robust, real-world Playwright automation framework for **K11 Software Solutions**. This project demonstrates best practices in UI automation, advanced reporting, and artifact management for a modern SaaS web application.



## ✨ Framework Highlights

- Page Object Model (POM) for clean UI abstraction
- Component-level tests for React (QuickActions, Card, HeroCarousel)
- Parallel test execution for fast feedback
- E2E flows and advanced user journeys
- Network mocking and request interception for robust test scenarios
- Visual regression testing for UI and component screenshots
- Custom Playwright fixture: saves screenshots for every test and individual card
- Allure and HTML reporting for rich test evidence
- Video capture for selected tests
- Config-driven navigation and robust selectors
- CI/CD friendly, scalable structure
- Documentation articles in /doc (component testing, Playwright JS/TS/Python comparison)

---


## 🧪 Automated Test Scenarios

The framework covers critical user journeys, advanced flows, component-level tests, and visual regression for K11 Software Solutions, including:

- Home page UI and navigation
- Forms Lab: form filling, validation, and submission
- Component-level tests (QuickActions, Card, HeroCarousel)
- Visual validation and custom screenshots for individual cards/components
- Visual regression testing for UI and component screenshots
- Data-driven and smoke test flows
- Advanced hooks, fixtures, and reporting integration
- Screenshot and video capture for every test and card
- Documentation and comparison articles for Playwright CT, JS, TS, and Python

Each scenario validates real user interactions, UI consistency, business logic, and visual correctness, making the suite suitable for smoke, regression, CI pipelines, and component-level quality assurance.

---


## 🧩 Tech Stack

- **Playwright** (JavaScript)
- **Node.js**
- **Allure Reporting**
- **Page Object Model (POM)**
- **Custom Playwright Fixtures**
- **Reusable Utilities**

---


## 🏗️ Project Structure

```
K11TechLab-playwright-javascript-ai-augmented-framework/
│
├── .github/                # GitHub workflows & configs
├── artifacts/              # Locator maps and test artifacts
├── components/             # UI components (Navbar, Footer, Card, QuickActions)
├── config/                 # App and test configuration
├── hooks/                  # Test hooks (before/after logic)
├── pages/                  # Page Object Model (POM) for all app pages
├── tests/                  # Test specifications (smoke, regression, lab, component)
├── uitestengine/           # Test context and base classes
├── utils/                  # Utilities (actions, data, waits, etc.)
├── playwright-fixtures.js  # Custom Playwright fixtures (screenshots, video)
├── doc/                    # Documentation articles (component testing, Playwright comparison)
├── playwright.config.js    # Playwright configuration
├── test-results/           # Screenshots, videos & traces (auto-generated)
├── allure-results/         # Allure reporting artifacts
├── playwright-report/      # Playwright HTML reports
├── package.json
└── README.md
```

---





test('K11softwaresolutions.com Home Page UI and Navigation screenshot', async ({ page }) => {

## 🧪 Sample Test Flows

### E2E Test Example
```js
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
test('Home Page UI and Navigation', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goToBaseUrl();
  await expect(page.locator('#home-hero-title')).toBeVisible();
  await homePage.clickExploreServices();
});
```

### Component Test Example
```js
import { test, expect } from '@playwright/experimental-ct-react';
import QuickActions from '../../components/QuickActions.jsx';
test('renders Tech Lab card', async ({ mount }) => {
  const component = await mount(<QuickActions />);
  const card = component.locator('#home-tech-lab-link');
  await expect(card).toBeVisible();
  await card.screenshot({ path: 'screenshots/QuickActions.spec/TechLab_card.png' });
});
```

Tests are business-readable, with implementation details handled in page objects, utilities, and component files.

---



## ▶️ How to Run the Tests

1. Clone the repository
  ```bash
  git clone https://github.com/<your-username>/K11TechLab-playwright-javascript-ai-augmented-framework.git
  cd K11TechLab-playwright-javascript-ai-augmented-framework
  ```
2. Install dependencies
  ```bash
  npm install
  ```
3. Run all E2E and component tests
  ```bash
  npx playwright test
  ```
4. Run only component tests
  ```bash
  npx playwright test -c playwright-ct.config.js
  ```
5. Run tests in headed (UI) mode
  ```bash
  npx playwright test --headed
  ```

---



## 📊 Test Reports & Artifacts

After execution, open the Playwright HTML report:
```bash
npx playwright show-report
```
Or view Allure results in allure-results/.

The framework automatically saves:
- Screenshots for every test (test-results/) and individual card (screenshots/QuickActions.spec/)
- Video recordings for selected tests
- Allure and HTML reports
- Trace files for debugging

---


## 🧠 Design Principles

- No hard-coded waits — Playwright auto-waiting is used
- Assertions kept within tests, not page objects
- Reusable logic extracted into utilities
- Tests reflect real user behavior and business flows
- Framework structured for easy scalability and maintainability

---



## 🚀 Future Enhancements

- GitHub Actions CI pipeline
- Environment-based execution (QA / Staging / Prod)
- API + UI integrated flows
- Dockerized test execution
- Advanced reporting and dashboard integration
- Visual regression testing for component screenshots

---


## 👩‍💻 Maintainers

K11 Tech QA Team

---

For questions, contributions, or support, please contact the K11 Tech QA team.
