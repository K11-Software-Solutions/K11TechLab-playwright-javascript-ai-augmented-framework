const TestContext = require('../uitestengine/testcontext');
const UIElementActions = require('../utils/UIElementActions');
const { expect } = require('@playwright/test');

// K11softwaresolutions.com Home Page Model using element-locator-id-map.json
class HomePage extends TestContext {
    constructor(page) {
        super();
        this.page = page;
        console.log('[HomePage] Constructor: page is', !!this.page);
        this.elementAction = new UIElementActions(this.page);
        // Locators from element-locator-id-map.json
        this.heroTitle = '#home-hero-title';
        this.heroDescription = '#home-hero-description';
        this.exploreServicesBtn = '#home-explore-services-btn';
        this.contactBtn = '#home-contact-btn';
        this.benefitFast = '#home-benefit-fast';
        this.benefitScalable = '#home-benefit-scalable';
        this.benefitAI = '#home-benefit-ai';
        this.techLabLink = '#home-tech-lab-link';
        this.insightsLink = '#home-insights-link';
        this.servicesLink = '#home-services-link';
        this.dashboardLink = '#home-dashboard-link';
    }

    async goto() {
        console.log('[HomePage] goto() called');
        await this.goToBaseUrl();
    }


    async getHeroTitle() {
        await this.page.waitForSelector(this.heroTitle, { state: 'visible', timeout: 5000 });
        return await this.elementAction.getElementTitle(this.heroTitle);
    }

    async getPageTitle() {
        return await this.elementAction.getPageTitle();
    }

    async clickExploreServices() {
        await this.elementAction.click(this.exploreServicesBtn);
    }

    async clickContact() {
        await this.elementAction.click(this.contactBtn);
    }

    async clickTechLab() {
        await this.elementAction.click(this.techLabLink);
    }

    async clickInsights() {
        await this.elementAction.click(this.insightsLink);
    }

    async clickServices() {
        await this.elementAction.click(this.servicesLink);
    }

    async clickDashboard() {
        await this.elementAction.click(this.dashboardLink);
    }
}

module.exports = HomePage;
