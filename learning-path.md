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

## 2. Intermediate: Data-Driven & Parameterized Testing
- **CSV-driven test data**
  - Example: `testdata/login_data.csv`, `utils/DataProvider.js`
- **Parameterized test flows**
  - Example: `tests/smoke/LoginTest.spec.js`

## 3. Advanced: Component, API, and Visual Testing
- **Component-level tests (React, UI)**
  - Example: `components/QuickActions.js`, `tests/component/HeroCarousel.spec.js`
- **API testing and network mocking**
  - Example: `tests/api/AlApiTest.spec.js`
- **Visual regression and screenshot validation**
  - Example: `artifacts/`, custom fixtures

## 4. Context-Aware & State Management
- **XState integration for context-aware flows**
  - Example: `hooks/hook.js`, `doc/xstate-overview.md`

## 5. MCP (Model Context Protocol) Automation
- **MCP login and scenario tests**
  - Example: `tests/mcp/MCPLoginTest.spec.js`
- **MCP reports and artifacts**
  - Example: `reports/mcp/`

## 6. AI-Augmented Test Generation
- **AI-powered Playwright test generation**
  - Example: `ai/generate_generic_tests_ai.js`, `prompts/playwright_login_test_generation.txt`
  - See: `README-ai.md`

---

## 📚 Documentation & Further Reading
- Component testing: `doc/component-testing.md`
- Playwright JS/TS/Python comparison: `doc/cypress-vs-playwright.md`
- XState overview: `doc/xstate-overview.md`
- MCP and AI integration: `README-ai.md`

---

**Follow this path to build foundational skills, then explore advanced automation and AI-driven workflows for real-world web applications.**
