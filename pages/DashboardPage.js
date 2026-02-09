const TestContext = require('../uitestengine/testcontext');
const UIElementActions = require('../utils/UIElementActions');
const { baseUrl } = require('../config/appConfig');

class DashboardPage extends TestContext {
    constructor() {
        super();
        this.elementAction = new UIElementActions(this.page);
        this.container = '#dashboard-container';
        this.title = '#dashboard-title';
        this.welcome = '#dashboard-welcome';
        this.email = '#dashboard-email';
        this.logout = '#dashboard-logout';
    }

    async goto() {
        await this.goToBaseUrl(`${baseUrl}/dashboard`);
    }

    async logoutUser() {
        await this.elementAction.click(this.logout);
    }
}

module.exports = DashboardPage;
