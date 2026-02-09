// Footer component using JSON locators
class Footer {
    constructor(page) {
        this.page = page;
        this.root = 'footer';
        this.logoImg = "img[alt='K11 Logo']";
        this.title = 'span';
        this.desc = 'p';
        this.sections = {
            solutions: "h3:contains('Solutions')",
            services: "a[href='/services']",
            insights: "a[href='/insights']",
            community: "a[href='/community']",
            about: "a[href='/about']",
            contact: "a[href='/contact']"
        };
        this.getStarted = {
            services: "a[href='/services']",
            subscribe: "a[href='/register']"
        };
        this.social = {
            linkedin: "a[href*='linkedin.com']",
            github: "a[href*='github.com']",
            youtube: "a[href*='youtube.com']"
        };
        this.legal = {
            privacy: "a[href='/privacy-policy']",
            terms: "a[href='/terms-of-use']"
        };
        this.email = "a[href^='mailto:']";
    }

    async getTitleText() {
        return await this.page.locator(this.title).textContent();
    }

    async getDescription() {
        return await this.page.locator(this.desc).textContent();
    }

    async clickSectionLink(section) {
        const selector = this.sections[section];
        if (!selector) throw new Error('Invalid footer section');
        await this.page.locator(selector).click();
    }

    async clickGetStartedLink(link) {
        const selector = this.getStarted[link];
        if (!selector) throw new Error('Invalid get started link');
        await this.page.locator(selector).click();
    }

    async clickSocialLink(platform) {
        const selector = this.social[platform];
        if (!selector) throw new Error('Invalid social platform');
        await this.page.locator(selector).click();
    }

    async clickLegalLink(type) {
        const selector = this.legal[type];
        if (!selector) throw new Error('Invalid legal link');
        await this.page.locator(selector).click();
    }

    async clickEmail() {
        await this.page.locator(this.email).click();
    }
}

module.exports = Footer;
