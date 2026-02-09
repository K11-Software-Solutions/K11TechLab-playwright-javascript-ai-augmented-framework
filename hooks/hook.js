// Playwright hooks for setup and teardown
const { test } = require('@playwright/test');

// Example: Global setup before all tests
// Can be used to initialize environment, DB, etc.
const os = require('os');
const { allure } = require('allure-playwright');
const { chromium, firefox, webkit } = require('playwright');

test.beforeAll(async () => {
  // Log environment info
  const browserName = process.env.BROWSER || 'chromium';
  const osInfo = `${os.type()} ${os.release()} (${os.platform()})`;
  const nodeVersion = process.version;
  console.log(`[Env] Browser: ${browserName}`);
  console.log(`[Env] OS: ${osInfo}`);
  console.log(`[Env] Node.js: ${nodeVersion}`);
  console.log(`[Env] CI: ${process.env.CI ? 'true' : 'false'}`);
});

// Example: Global teardown after all tests
test.afterAll(async () => {
  // e.g., global teardown logic
  console.log('Global teardown after all tests');
});

// Example: Setup before each test
test.beforeEach(async ({ page }, testInfo) => {
  // Clear cookies, set viewport, log test start
  await page.context().clearCookies();
  await page.setViewportSize({ width: 1280, height: 800 });
  console.log(`[Hook] Starting test: ${testInfo.title}`);
});

// Log test end and status, handle errors
test.afterEach(async ({ page }, testInfo) => {
  // Attach screenshot to Allure report
  const screenshotDir = require('path').join(process.cwd(), 'test-results');
  const fileName = `${testInfo.title.replace(/[^a-zA-Z0-9]/g, '_')}_${testInfo.status}${testInfo.retry ? `_retry${testInfo.retry}` : ''}.png`;
  const screenshotPath = require('path').join(screenshotDir, fileName);
  if (require('fs').existsSync(screenshotPath)) {
    await allure.attach('Screenshot', require('fs').readFileSync(screenshotPath), 'image/png');
  }
  // Attach video if present
  if (testInfo.title.toLowerCase().includes('video')) {
    const videoDir = require('path').join(process.cwd(), 'videos');
    const videoFile = `${testInfo.title.replace(/[^a-zA-Z0-9]/g, '_')}.webm`;
    const videoPath = require('path').join(videoDir, videoFile);
    if (require('fs').existsSync(videoPath)) {
      await allure.attach('Video', require('fs').readFileSync(videoPath), 'video/webm');
    }
  }
  if (testInfo.status === 'failed') {
    console.error(`[Hook] Test failed: ${testInfo.title}`);
    if (testInfo.error) {
      console.error(`[Hook] Error: ${testInfo.error.message}`);
    }
  } else {
    console.log(`[Hook] Finished test: ${testInfo.title} (${testInfo.status})`);
  }
});
// Example: Teardown after each test
test.afterEach(async ({ page }) => {
  // e.g., additional cleanup
  // await page.close(); // Not needed unless you manually manage pages
});
