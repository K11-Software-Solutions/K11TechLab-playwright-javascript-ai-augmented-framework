require('../../playwright-fixtures');
require('../../hooks/hook');
const { test, expect, request } = require('@playwright/test');
const path = require('path');
const DataProvider = require('../../utils/DataProvider');
const fs = require('fs');

const API_URL = 'https://k11softwaresolutions-backend.onrender.com/api/login/';
const csvPath = path.join(__dirname, '../../testdata/e2e_login_data.csv');
const rows = DataProvider.fetchDataFromCsv(csvPath);

for (const { username, password } of rows) {
  test(`E2E: login using API and validate UI dashboard (${username})`, async ({ page }) => {
    // Login via API
    const apiContext = await request.newContext();
    const loginResp = await apiContext.post(API_URL, {
      data: { username, password }
    });
    if (loginResp.status() !== 200) {
      const errorBody = await loginResp.text();
      console.error(`[API ERROR] Status: ${loginResp.status()} Body: ${errorBody}`);
    }
    expect(loginResp.status()).toBe(200);
    const respData = await loginResp.json();
    expect(respData.access).toBeDefined();

    // Save API response JSON in apiresponse folder
    const apiRespDir = path.join(__dirname, '../../apiresponse');
    if (!fs.existsSync(apiRespDir)) {
      fs.mkdirSync(apiRespDir);
    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const apiRespPath = path.join(apiRespDir, `api_${username}_${timestamp}.json`);
    fs.writeFileSync(apiRespPath, JSON.stringify(respData, null, 2));

    // Set token in localStorage before navigating to dashboard
    await page.addInitScript(token => {
      window.localStorage.setItem('token', token);
    }, respData.access);

    // Go to dashboard
    await page.goto('/dashboard');
    try {
      await expect(page.locator('h1:text("Dashboard")')).toBeVisible();
    } catch (err) {
      const html = await page.content();
      console.error('[DEBUG] Dashboard page HTML:', html);
      throw err;
    }
    // Add more assertions for dashboard content as needed
  });
}
