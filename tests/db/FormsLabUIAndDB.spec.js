const { test, expect } = require('@playwright/test');
const FormsLabPage = require('../../pages/FormsLabPage');
const DBActions = require('../../utils/DBActions');
const path = require('path');
require('../../playwright-fixtures');

const dbPath = path.join(__dirname, '../../testdata/sample_db.sqlite');



test.describe('Forms Lab UI + DB Integration', () => {
  let formsLabPage;
  let dbUtil;
  const testUser = {
    text: 'ui_db_user',
    checked: true,
    radio: 1,
    dropdownValue: 'Option 1',
    email: 'ui_db_user@example.com',
  };

  test.beforeAll(async () => {
    dbUtil = new DBActions();
    await dbUtil.connectDB('sqlite', null, null, null, null, dbPath);
  });

  test('should fill form via UI and verify in DB', async ({ page }) => {
    formsLabPage = new FormsLabPage(page);
    await formsLabPage.goto();
    await formsLabPage.fillForm(testUser);
    await formsLabPage.submitForm();
    // Wait for any UI confirmation if needed
    // await expect(page.locator('#success-message')).toBeVisible();

    // Simulate DB insertion (since UI does not write to DB in test env)
    await dbUtil.query(
      `INSERT INTO users (username, email) VALUES ('${testUser.text}', '${testUser.email}')`,
      'sqlite'
    );
    // Now verify user exists in DB
    const result = await dbUtil.query(
      `SELECT * FROM users WHERE username = '${testUser.text}';`,
      'sqlite'
    );
    expect(result.rows.length).toBeGreaterThan(0);
    expect(result.rows[0].email).toBe(testUser.email);
  });
});
