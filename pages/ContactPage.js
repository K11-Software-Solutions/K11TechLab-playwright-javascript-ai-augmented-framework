const TestContext = require('../uitestengine/testcontext');
const UIElementActions = require('../utils/UIElementActions');
const { baseUrl } = require('../config/appConfig');

class ContactPage extends TestContext {
    constructor() {
        super();
        this.elementAction = new UIElementActions(this.page);
        this.container = '#contact-container';
        this.title = '#contact-title';
        this.form = '#contact-form';
        this.name = '#contact-name';
        this.email = '#contact-email';
        this.subject = '#contact-subject';
        this.message = '#contact-message';
        this.submit = '#contact-submit';
        this.sent = '#contact-sent';
    }

    async goto() {
        await this.goToBaseUrl(`${baseUrl}/contact`);
    }

    async sendMessage(name, email, subject, message) {
        await this.elementAction.enterText(this.name, name);
        await this.elementAction.enterText(this.email, email);
        await this.elementAction.enterText(this.subject, subject);
        await this.elementAction.enterText(this.message, message);
        await this.elementAction.click(this.submit);
    }
}

module.exports = ContactPage;
