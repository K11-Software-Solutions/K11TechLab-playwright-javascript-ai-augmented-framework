const TestContext = require('../uitestengine/testcontext');
const UIElementActions = require('../utils/UIElementActions');
const { baseUrl } = require('../config/appConfig');

class AboutPage extends TestContext {
    constructor() {
        super();
        this.elementAction = new UIElementActions(this.page);
        this.container = '#about-container';
        this.title = '#about-title';
    }

    async goto() {
        await this.goToBaseUrl(`${baseUrl}/about`);
    }
}

module.exports = AboutPage;
