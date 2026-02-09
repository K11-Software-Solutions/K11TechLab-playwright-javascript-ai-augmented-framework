const TestContext = require('../uitestengine/testcontext');
const UIElementActions = require('../utils/UIElementActions');
const { baseUrl } = require('../config/appConfig');

class RegisterPage extends TestContext {
    constructor() {
        super();
        this.elementAction = new UIElementActions(this.page);
        this.container = '#register-container';
        this.title = '#register-title';
        this.error = '#register-error';
        this.success = '#register-success';
        this.form = '#register-form';
        this.username = '#register-username';
        this.email = '#register-email';
        this.password = '#register-password';
        this.subscription = '#register-subscription';
        this.submit = '#register-submit';
    }

    async goto() {
        await this.goToBaseUrl(`${baseUrl}/register`);
    }

    async register(username, email, password, subscription) {
        await this.elementAction.enterText(this.username, username);
        await this.elementAction.enterText(this.email, email);
        await this.elementAction.enterText(this.password, password);
        await this.elementAction.selectByValue(this.subscription, subscription);
        await this.elementAction.click(this.submit);
    }
}

module.exports = RegisterPage;
