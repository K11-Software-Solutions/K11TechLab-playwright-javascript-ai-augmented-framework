# Playwright Learning Path & Test Categories

This document guides you through the learning path for mastering Playwright automation in the K11TechLab framework, with references to demo tests and advanced categories including MCP (Model Context Protocol).

---


## 1. Getting Started: Playwright Basics
- **Simple navigation and assertions**
  - Example: `tests/smoke/HomeTest.spec.js`
- **Selectors and element actions**
  - Example: `utils/ElementAction.js`
- **Waits and synchronization**
  - Example: `utils/WaitIUtils.js`

## 2. Advanced Selectors & DOM Strategies
- **Advanced selector strategies (text, CSS, XPath, nth, attribute, role, label, test id)**
  - Example: `tests/selectors/SelectorsAdvanced.spec.js`
- **Shadow DOM and iframe handling**
  - Example: `tests/selectors/SelectorsAdvanced.spec.js` (shadow DOM & iframe sections)
- **Maintainable page objects from DOM artifacts**
  - Example: `pages/LocatorsLabPage.js`
- **Documentation**
  - See: `doc/playwright-basics/advanced-selectors.md`

## 3. Intermediate: Data-Driven & Parameterized Testing
- **CSV-driven test data**
  - Example: `testdata/login_data.csv`, `utils/DataProvider.js`
- **Parameterized test flows**
  - Example: `tests/smoke/LoginTest.spec.js`


## 4. Advanced: Component, API, and Visual Testing
- **Component-level tests (React, UI)**
  - Example: `components/QuickActions.js`, `tests/components/HeroCarousel.spec.jsx`, `tests/components/QuickActions.spec.jsx`, `tests/components/TechLabCard.spec.jsx`
- **API testing and network mocking**
  - Example: `tests/api/AIAPITests.spec.js`, `tests/api/APIActionsIntegration.spec.js`, `tests/api/JSONPlaceholderAPITests.spec.js`
- **Visual regression and screenshot validation**
  - Example: `tests/advanced/VisualRegressionTest.spec.js`, `tests/advanced/VisualRegressionTest.spec.js-snapshots/`, custom fixtures

## 5. Context-Aware & State Management
- **XState integration for context-aware flows**
  - Example: `doc/xstate-overview.md`
- **Generic Playwright hooks (setup, teardown, custom logic) & custom test context**
  - Example: `hooks/hook.js`, `uitestengine/testcontext.js`

## 6. MCP (Model Context Protocol) Automation
- **MCP login and scenario tests**
  - Example: `tests/mcp/MCPLoginTest.spec.js`
- **MCP reports and artifacts**
  - Example: `reports/mcp/`

## 7. AI-Augmented Test Generation
- **AI-powered Playwright test generation**
  - Example: `ai/generate_generic_tests_ai.js`, `prompts/playwright_login_test_generation.txt`
  - See: `README-ai.md`

---


## 📚 Documentation & Further Reading
- Advanced selectors: `doc/playwright-basics/advanced-selectors.md`
- Component testing: `doc/component-testing.md`
- Playwright JS/TS/Python comparison: `doc/cypress-vs-playwright.md`
- XState overview: `doc/xstate-overview.md`
- MCP and AI integration: `README-ai.md`

---

**Follow this path to build foundational skills, then explore advanced automation and AI-driven workflows for real-world web applications.**
