const { expect } = require('@playwright/test');
class UIElementActions {
    // Set checkbox to desired state
    async setCheckbox(selector, checked) {
        const locator = this.page.locator(selector);
        const isChecked = await locator.isChecked();
        if (checked !== isChecked) {
            await locator.click();
        }
    }

    constructor(page){
        this.page=page;
        console.log('[UIElementActions] Constructor: page is', !!this.page);
    }

    //Enter text in input field
    async enterText(selector, text){
        try{
            await this.page.fill(selector, text);
        } catch(error){
            throw new Error("Entering text failed");
        }
    }

    //Click on element with wait for visibility and enabled state
    async click(selector) {
        try {
            const locator = this.page.locator(selector);
            await locator.waitFor({ state: 'visible', timeout: 10000 });
            await locator.click();
        } catch (error) {
            throw new Error(`Click failed for selector: ${selector} - ${error.message}`);
        }
    }

    //Get title of the page
    async getPageTitle(){
        try{
            const title = await this.page.title();
            console.log(title);
            return title;
        } catch(error){
            throw new Error("Could not get the title");
        }
    }

    async getElementTitle(selectorOrXpath){
        try {
            const locator = this.page.locator(selectorOrXpath);
            await locator.waitFor({ state: 'visible', timeout: 10000 });
            const text = await locator.textContent();
            if (!text) throw new Error(`Element found but text is empty for selector: ${selectorOrXpath}`);
            return text;
        } catch(error) {
            throw new Error(`Could not get the element text for selector: ${selectorOrXpath} - ${error.message}`);
        }
    }

    //DropDown selection by Value or Label
    async selectByValue(selector, value) {
        const locator = this.page.locator(selector);
        await locator.waitFor({ state: 'visible', timeout: 10000 });
        const options = await locator.locator('option').allTextContents();
        console.log('Dropdown options:', options);
        try {
            await this.page.selectOption(selector, value);
        } catch {
            await this.page.selectOption(selector, { label: value });
        }
    }

    //Scroll to element
    async scrollToElement(selector){
        await this.page.locator(selector).scrollIntoViewIfNeeded();
    }

    // Assert CheckBoxes
    async checkBoxAssert(selectorOrXpath, expectedState){
        if(expectedState){
            await expect(selectorOrXpath).toBeChecked();
        } else {
            await expect(selectorOrXpath).not.toBeChecked();
        }
    }
}

module.exports = UIElementActions;
