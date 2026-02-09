// Navbar component using JSON locators
class Navbar {
    constructor(page) {
        this.page = page;
        this.root = 'header';
        this.logoLink = "a[href='/']";
        this.logoImg = "img[alt='K11 Logo']";
        this.title = 'span';
        this.links = {
            home: "a[href='/']",
            services: "a[href='/services']",
            insights: "a[href='/insights']",
            techLab: "a[href='/tech-lab']",
            blog: "a[href='/blog']",
            community: "a[href='/community']",
            about: "a[href='/about']",
            contact: "a[href='/contact']"
        };
    }

    async clickLogo() {
        await this.page.locator(this.logoLink).click();
    }

    async clickNavLink(linkName) {
        const selector = this.links[linkName];
        if (!selector) throw new Error('Invalid navbar link name');
        await this.page.locator(selector).click();
    }

    async getTitleText() {
        return await this.page.locator(this.title).textContent();
    }
}

module.exports = Navbar;
