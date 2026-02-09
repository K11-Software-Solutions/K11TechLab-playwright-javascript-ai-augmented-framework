const TestContext = require('../uitestengine/testcontext');
const UIElementActions = require('../utils/UIElementActions');
const { baseUrl } = require('../config/appConfig');

class ServicesPage extends TestContext {
    constructor() {
        super();
        this.elementAction = new UIElementActions(this.page);
        this.container = '#services-container';
        this.title = '#services-title';
    }

    async goto() {
        await this.goToBaseUrl(`${baseUrl}/services`);
    }
}

module.exports = ServicesPage;
