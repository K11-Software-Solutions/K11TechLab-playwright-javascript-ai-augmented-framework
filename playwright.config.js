// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  outputDir: './test-results',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: 60 * 1000, // 1 min per test
  expect: { timeout: 8000 },
  reporter: [
    ['allure-playwright', { detail: true, outputFolder: 'allure-results', suiteTitle: false }],
    ['html', { open: 'never' }]
  ],
  use: {
    baseURL: 'https://k11softwaresolutions.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 15000,
    navigationTimeout: 30000,
    headless: true,
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
    screenshotOnFailure: true,
  },
  projects: [
    {
      name: 'K11 Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
      // Enable for cross-browser:
      // { name: 'K11 Firefox', use: { ...devices['Desktop Firefox'] } },
      // { name: 'K11 WebKit', use: { ...devices['Desktop Safari'] } },

      // Device tests
      {
        name: 'K11 Mobile Chrome',
        use: { ...devices['Pixel 5'] },
      },
      {
        name: 'K11 Mobile Safari',
        use: { ...devices['iPhone 12'] },
      },
      {
        name: 'K11 Tablet Chrome',
        use: { ...devices['Galaxy Tab S4'] },
      },
      {
        name: 'K11 Tablet Safari',
        use: { ...devices['iPad Pro 11'] },
      },
  ],
  metadata: {
    project: 'K11 TechLab Playwright Automation',
    owner: 'K11 Tech QA',
    environment: process.env.CI ? 'CI' : 'Local',
  },
});

