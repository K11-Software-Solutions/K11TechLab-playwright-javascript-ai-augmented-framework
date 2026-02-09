// playwright-fixtures.js
const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// Custom fixture: capture screenshot for tests with 'screenshot' in title
// Usage: Add 'screenshot' to your test title to trigger screenshot capture

test.afterEach(async ({ page }, testInfo) => {
  // Organize screenshots by suite and add timestamp, save to root screenshots/
  const suiteName = testInfo.file ? path.basename(testInfo.file, path.extname(testInfo.file)) : 'suite';
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const screenshotDir = path.join(process.cwd(), 'screenshots', suiteName);
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }
  // Filename: title + status + retry + timestamp
  const fileName = `${testInfo.title.replace(/[^a-zA-Z0-9]/g, '_')}_${testInfo.status}${testInfo.retry ? `_retry${testInfo.retry}` : ''}_${timestamp}.png`;
  const screenshotPath = path.join(screenshotDir, fileName);
  try {
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`[Fixture] Screenshot saved: ${screenshotPath}`);
  } catch (err) {
    console.error(`[Fixture] Screenshot failed: ${err}`);
  }

  // Video for tests with 'video' in title
  if (testInfo.title.toLowerCase().includes('video')) {
    const videoDir = path.join(process.cwd(), 'videos');
    if (!fs.existsSync(videoDir)) {
      fs.mkdirSync(videoDir);
    }
    const video = await page.video();
    if (video) {
      const fileName = testInfo.title.replace(/[^a-zA-Z0-9]/g, '_') + '.webm';
      await video.saveAs(path.join(videoDir, fileName));
    }
  }
});
