const TestContext = require('../uitestengine/testcontext');
const UIElementActions = require('../utils/UIElementActions');
const { baseUrl } = require('../config/appConfig');

class LoginPage extends TestContext {
    constructor() {
        super();
        this.elementAction = new UIElementActions(this.page);
        this.container = '#login-container';
        this.title = '#login-title';
        this.error = '#login-error';
        this.form = '#login-form';
        this.username = '#login-username';
        this.password = '#login-password';
        this.forgotPasswordLink = '#login-forgot-password-link';
        this.forgotLink = '#login-forgot-link';
        this.submit = '#login-submit';
        this.registerLink = '#login-register-link';
        this.registerHere = '#login-register-here';
    }

    async goto() {
        await this.goToBaseUrl(`${baseUrl}/login`);
    }

    async login(username, password) {
        await this.elementAction.enterText(this.username, username);
        await this.elementAction.enterText(this.password, password);
        await this.elementAction.click(this.submit);
    }
}

module.exports = LoginPage;
