// Page object for https://k11softwaresolutions.com/labs/locators
// Generated from artifacts/k11-platform-locator-id-map/element-locator-id-map-locators-lab.json

class LocatorsLabPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // ID-based locators
    this.root = page.locator('#locators-lab-root');
    this.mainGrid = page.locator('#locators-lab-main-grid');
    this.controlsPanel = page.locator('#locators-lab-controls-panel');
    this.title = page.locator('#locators-lab-title');
    this.desc = page.locator('#locators-lab-desc');
    this.modeToggle = page.locator('#locators-lab-mode-toggle');
    this.modeCss = page.locator('#locators-lab-mode-css');
    this.modeXpath = page.locator('#locators-lab-mode-xpath');
    this.query = page.locator('#locators-lab-query');
    this.deepToggleRow = page.locator('#locators-lab-deep-toggle-row');
    this.deepToggle = page.locator('#locators-lab-deep-toggle');
    this.actionButtons = page.locator('#locators-lab-action-buttons');
    this.runBtn = page.locator('#locators-lab-run-btn');
    this.clearBtn = page.locator('#locators-lab-clear-btn');
    this.statusRow = page.locator('#locators-lab-status-row');
    this.statusError = page.locator('#locators-lab-status-error');
    this.statusSuccess = page.locator('#locators-lab-status-success');
    this.examples = page.locator('#locators-lab-examples');
    this.sandboxPanel = page.locator('#locators-lab-sandbox-panel');
    this.sandboxTitle = page.locator('#locators-lab-sandbox-title');
    this.sandboxDesc = page.locator('#locators-lab-sandbox-desc');
    this.loader = page.locator('#locators-lab-loader');
    this.sandboxRoot = page.locator('#locators-lab-sandbox-root');
    // Selector-based locators
    this.modalCard = page.locator('[data-k11="modal-card"]');
    this.userEmail = page.locator('#userEmail');
    this.userPass = page.locator('#userPass');
    this.companyName = page.locator('#companyName');
    this.mobile = page.locator('#mobile');
    this.country = page.locator('#country');
    this.disabledName = page.locator('#disabledName');
    this.sandboxFormSection = page.locator("section:has(h3:has-text('Dummy Form'))");
    this.sandboxTableSection = page.locator("section:has(h3:has-text('User Table'))");
    this.sandboxShadowSection = page.locator("section:has(h3:has-text('Shadow DOM'))");
    this.sandboxPopupsSection = page.locator("section:has(h3:has-text('Popups & Actions'))");
    this.sandboxIframeSection = page.locator("section:has(h3:has-text('iframe Lab (srcDoc)'))");
    this.iframe = page.frameLocator("iframe[title='k11-iframe-lab']");
  }

  async goto() {
    await this.page.goto('https://k11softwaresolutions.com/labs/locators');
  }
}

module.exports = LocatorsLabPage;
