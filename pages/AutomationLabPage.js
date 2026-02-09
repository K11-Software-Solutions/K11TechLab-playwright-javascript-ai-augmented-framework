const TestContext = require('../uitestengine/testcontext');
const UIElementActions = require('../utils/UIElementActions');
const { baseUrl } = require('../config/appConfig');

class AutomationLabPage extends TestContext {
    constructor() {
        super();
        this.elementAction = new UIElementActions(this.page);
        // Add selectors for Automation Lab page as needed
        // Example: this.title = '#automation-lab-title';
    }

    async goto() {
        await this.goToBaseUrl(`${baseUrl}/automation-lab`);
    }
}

module.exports = AutomationLabPage;
