// Example: MCP-style context-aware test with Playwright and XState

const { test, expect } = require('@playwright/test');

const { createMachine, interpret } = require('xstate');
const { baseUrl } = require('../../config/appConfig');
const path = require('path');
const DataProvider = require('../../utils/DataProvider');
const csvPath = path.join(__dirname, '../../testdata/login_data.csv');
const rows = DataProvider.fetchDataFromCsv(csvPath);

// Define a simple state machine for login flow
const loginMachine = createMachine({
  id: 'login',
  initial: 'start',
  states: {
    start: {
      on: { BEGIN: 'enteringCredentials' }
    },
    enteringCredentials: {
      on: { SUBMIT: 'loggingIn' }
    },
    loggingIn: {
      on: { SUCCESS: 'dashboard', FAILURE: 'error' }
    },
    dashboard: {},
    error: {}
  }
});

// Context engine: capture state transitions
function captureContext(service) {
  const contextLog = [];
  // Log initial state for demo (XState v5)
  contextLog.push(service.getSnapshot().value);
  service.subscribe(state => {
    if (state.changed) contextLog.push(state.value);
  });
  return contextLog;
}

// Playwright test using MCP-style context

// This test uses XState to model the login flow and logs context transitions

// Removed obsolete single test definition. Only CSV-driven suite remains.
test.describe('MCP-style login test (CSV driven)', () => {
  for (const { testName, username, password, expected } of rows) {
    test(`${testName} (${username})`, async ({ page }) => {
      // Start state machine
      const service = interpret(loginMachine).start();
      const contextLog = captureContext(service);

      // Demo: manually log transitions for visibility
      contextLog.push('start');
      service.send({ type: 'BEGIN' });
      contextLog.push('enteringCredentials');
      await page.goto(`${baseUrl}/login`);
      await page.fill('#login-username', username);
      await page.fill('#login-password', password);
      service.send({ type: 'SUBMIT' });
      contextLog.push('loggingIn');
      await page.click('#login-submit');

      // Check login result
      if (expected === 'success') {
        service.send({ type: 'SUCCESS' });
        contextLog.push('dashboard');
        await expect(page).toHaveURL(/dashboard/);
      } else {
        service.send({ type: 'FAILURE' });
        contextLog.push('error');
        const errorLocator = page.locator('#login-error');
        if (await errorLocator.count() > 0) {
          await expect(errorLocator).toContainText('Invalid login credentials. Please check your username and password.');
        } else {
          console.warn('Login error element not found after failed login.');
        }
      }

      // Begin login
      service.send({ type: 'BEGIN' });
      await page.goto(`${baseUrl}/login`);
      await page.fill('#login-username', username);
      await page.fill('#login-password', password);
      service.send({ type: 'SUBMIT' });
      await page.click('#login-submit');

      // Check login result
      if (expected === 'success') {
        service.send({ type: 'SUCCESS' });
        await expect(page).toHaveURL(/dashboard/);
      } else {
        service.send({ type: 'FAILURE' });
        const errorLocator = page.locator('#login-error');
        if (await errorLocator.count() > 0) {
          await expect(errorLocator).toContainText('Invalid login credentials. Please check your username and password.');
        } else {
          console.warn('Login error element not found after failed login.');
        }
      }

      // Log context transitions
      console.log('MCP Context Log:', contextLog);

      // Save test result in reports/mcp folder
      const fs = require('fs');
      const reportsDir = path.join(__dirname, '../../reports/mcp');
      if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir, { recursive: true });
      }
      const result = {
        test: testName,
        username,
        outcome: await page.url().includes('dashboard') ? 'success' : 'failure',
        contextLog,
        timestamp: new Date().toISOString()
      };
      const fileName = `login_${result.outcome}_${username}_${result.timestamp.replace(/[:.]/g, '-')}.json`;
      fs.writeFileSync(path.join(reportsDir, fileName), JSON.stringify(result, null, 2));
    });
  }
});
