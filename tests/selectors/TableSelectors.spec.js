const { test, expect } = require('@playwright/test');

test.describe('Automation Lab Tables - Table Selectors', () => {
  test('should select table elements on Automation Lab Tables page', async ({ page }) => {
    await page.goto('https://k11softwaresolutions.com/automation-lab/tables');
    // Select table by header (from artifact)
    await expect(page.locator('#tables-lab-title')).toBeVisible();
    // Select table by id (from artifact)
    await expect(page.locator('#tables-lab-table')).toBeVisible();
    // Select header row by id
    await expect(page.locator('#tables-lab-header-row')).toBeVisible();
    // Select first data row by id
    await expect(page.locator('#tables-lab-row-1')).toBeVisible();
    // Select cell by id (first row, name)
    await expect(page.locator('#tables-lab-row-1-name')).toBeVisible();
    // Select cell by id (first row, role)
    await expect(page.locator('#tables-lab-row-1-role')).toBeVisible();
    // Select features list by id
    await expect(page.locator('#tables-lab-features-list')).toBeVisible();
  });
});
