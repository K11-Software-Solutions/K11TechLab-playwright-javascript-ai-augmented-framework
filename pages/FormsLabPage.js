const TestContext = require('../uitestengine/testcontext');
const UIElementActions = require('../utils/UIElementActions');
const { baseUrl } = require('../config/appConfig');

// Page Object for /labs/forms
class FormsLabPage extends TestContext {
    constructor(page) {
        super();
        this.page = page;
        this.elementAction = new UIElementActions(this.page);
        this.root = '#forms-lab-root';
        this.title = '#forms-lab-title';
        this.desc = '#forms-lab-desc';
        this.form = '#forms-lab-form';
        this.textField = '#forms-lab-text-field';
        this.checkbox = '#forms-lab-checkbox';
        this.radio1 = '#forms-lab-radio-1';
        this.radio2 = '#forms-lab-radio-2';
        this.dropdown = '#forms-lab-dropdown';
        this.submitBtn = '#forms-lab-submit-btn';
    }

    async goto() {
        await this.goToBaseUrl(`${baseUrl}/automation-lab/forms`);
        // Wait for form container to be visible
        await this.page.waitForSelector(this.form, { state: 'visible', timeout: 10000 });
    }

    async fillForm({ text, checked, radio, dropdownValue }) {
        // Wait for text field to be visible before filling
        await this.page.waitForSelector(this.textField, { state: 'visible', timeout: 5000 });
        await this.elementAction.enterText(this.textField, text);
        if (checked !== undefined) {
            await this.elementAction.setCheckbox(this.checkbox, checked);
        }
        if (radio === 1) {
            await this.elementAction.click(this.radio1);
        } else if (radio === 2) {
            await this.elementAction.click(this.radio2);
        }
        if (dropdownValue !== undefined) {
            await this.elementAction.selectByValue(this.dropdown, dropdownValue);
        }
    }

    async submitForm() {
        await this.elementAction.click(this.submitBtn);
    }
}

module.exports = FormsLabPage;
