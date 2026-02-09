const {chromium} = require('@playwright/test');
const { baseUrl } = require('../config/appConfig');

class TestContext {
    constructor() {
        this.browser = null;
        this.context = null;
        this.page = null;
    }
    //Launch chrome browser
    async launchBrowser() {
        this.browser = await chromium.launch({ headless: true });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        return this.page; // return page so that test can use it
    }

    //Navigate to base URL from config
    async goToBaseUrl(url = baseUrl) {
        if (!this.page) {
            console.log('[TestContext] goToBaseUrl: this.page is undefined');
            throw new Error("Browser did not launch");
        }
        console.log('[TestContext] Navigating to', url);
        await this.page.goto(url);
    }

    //Close browser
    async closeBrowser() {
        if (this.page) await this.page.close();
        if (this.context) await this.context.close();
        if (this.browser) await this.browser.close();
    }
}
module.exports = TestContext;
