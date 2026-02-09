// playwright-ct.config.js
const { defineConfig } = require('@playwright/experimental-ct-react');

module.exports = defineConfig({
  testDir: './tests/components',
  use: {
    viewport: { width: 1280, height: 720 },
  },
});
