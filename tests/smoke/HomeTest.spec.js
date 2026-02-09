require('../../playwright-fixtures');

const TestContext = require('../../uitestengine/testcontext');
const HomePage = require('../../pages/HomePage');
const { test, expect } = require('@playwright/test');

// K11softwaresolutions.com Home Page Test

test('K11softwaresolutions.com Home Page UI and Navigation screenshot', async ({ page }) => {
    // Pass page to HomePage constructor
    const homePage = new HomePage(page);

    // Use TestContext navigation
    await homePage.goToBaseUrl();

    // Assert hero title is visible
    await expect(page.locator('#home-hero-title')).toBeVisible();

    // Test navigation buttons
    await homePage.clickExploreServices();
    await page.waitForTimeout(1000);
    await page.goBack();
    await homePage.clickContact();
    await page.waitForTimeout(1000);
    await page.goBack();
    // Add more navigation tests as needed
});
