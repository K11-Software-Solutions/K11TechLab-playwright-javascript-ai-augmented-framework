
class WaitIUtils {
	constructor(page) {
		this.page = page;
	}

	// Static wait (hard wait)
	async wait(milliseconds) {
		await this.page.waitForTimeout(milliseconds);
	}

	// Dynamic wait for selector to be visible
	async waitForVisible(selector, timeout = 5000) {
		await this.page.waitForSelector(selector, { state: 'visible', timeout });
	}

	// Dynamic wait for selector to be attached to DOM
	async waitForAttached(selector, timeout = 5000) {
		await this.page.waitForSelector(selector, { state: 'attached', timeout });
	}

	// Dynamic wait for selector to be hidden
	async waitForHidden(selector, timeout = 5000) {
		await this.page.waitForSelector(selector, { state: 'hidden', timeout });
	}

	// Wait for selector to be detached from DOM
	async waitForDetached(selector, timeout = 5000) {
		await this.page.waitForSelector(selector, { state: 'detached', timeout });
	}

	// Wait for element to contain specific text
	async waitForText(selector, text, timeout = 5000) {
		await this.page.waitForFunction(
			(sel, txt) => {
				const el = document.querySelector(sel);
				return el && el.textContent.includes(txt);
			},
			selector,
			text,
			{ timeout }
		);
	}

	// Wait for a custom function/condition
	async waitForFunction(fn, arg, timeout = 5000) {
		await this.page.waitForFunction(fn, arg, { timeout });
	}

	// Wait for network to be idle
	async waitForNetworkIdle(timeout = 5000) {
		await this.page.waitForLoadState('networkidle', { timeout });
	}
}

module.exports = WaitIUtils;
