
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
}

module.exports = WaitIUtils;
