const TestContext = require('../uitestengine/testcontext');
const UIElementActions = require('../utils/UIElementActions');
const { baseUrl } = require('../config/appConfig');

class InsightsPage extends TestContext {
    constructor() {
        super();
        this.elementAction = new UIElementActions(this.page);
        this.container = '#insights-container';
    }

    async goto() {
        await this.goToBaseUrl(`${baseUrl}/insights`);
    }
}

module.exports = InsightsPage;
