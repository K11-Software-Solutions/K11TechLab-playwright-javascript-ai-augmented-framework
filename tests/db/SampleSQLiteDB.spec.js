const { test, expect } = require('@playwright/test');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../../testdata/sample_db.sqlite');

// Utility to run a query and return all rows
function runQuery(db, query) {
  return new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

test.describe('Sample SQLite DB Integration', () => {
  let db;
  test.beforeAll(async () => {
    db = new sqlite3.Database(dbPath);
  });
  test.afterAll(async () => {
    db.close();
  });

  test('should fetch all users from the users table', async () => {
    const rows = await runQuery(db, 'SELECT * FROM users;');
    expect(rows.length).toBeGreaterThan(0);
    expect(rows[0]).toHaveProperty('username');
    expect(rows[0]).toHaveProperty('email');
  });

  test('should fetch admin user by username', async () => {
    const rows = await runQuery(db, "SELECT * FROM users WHERE username = 'admin';");
    expect(rows.length).toBe(1);
    expect(rows[0].email).toBe('admin@example.com');
  });
});
