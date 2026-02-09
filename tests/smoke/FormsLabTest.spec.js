const { test, expect } = require('@playwright/test');
const FormsLabPage = require('../../pages/FormsLabPage');
const DataProvider = require('../../utils/DataProvider');
require('../../playwright-fixtures');

// Example: Fetch test data from JSON (can be Excel, CSV, DB, etc.)
const testData = [
  { text: 'Test User', checked: true, radio: 1, dropdownValue: 'Option 1' },
  { text: 'Another User', checked: false, radio: 2, dropdownValue: 'Option 2' }
];

test.describe('Forms Lab Page', () => {
  let formsLabPage;

  test.beforeEach(async ({ page }) => {
    formsLabPage = new FormsLabPage(page); // Pass page in constructor
    await formsLabPage.goto();
  });

  testData.forEach((data, idx) => {
    test(`should fill and submit form with data set ${idx + 1} screenshot`, async () => {
      await formsLabPage.fillForm(data);
      await formsLabPage.submitForm();
      // Add assertions as needed, e.g., check for success message or form reset
      // Example: await expect(formsLabPage.page.locator('#success-message')).toBeVisible();
    });
  });
});
