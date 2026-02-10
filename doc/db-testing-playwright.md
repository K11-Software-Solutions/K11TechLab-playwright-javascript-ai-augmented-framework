# Database Testing with Playwright (SQLite Example)

This guide explains how to perform database integration testing in the K11TechLab Playwright JavaScript framework using a sample SQLite database.

---

## Why DB Testing?
- Validate backend data consistency after UI/API actions
- Ensure end-to-end flows update the database as expected
- Enable data-driven test scenarios

---

## Sample Setup: SQLite

### 1. Sample Database
- The file `testdata/sample_db.sqlite` is a SQLite database with a `users` table and sample data.
- The schema and data are defined in `testdata/sample_db.sql`.
- To recreate the database, run:
  ```bash
  node testdata/create_sample_db.js
  ```

### 2. DB Test Example
File: `tests/db/SampleSQLiteDB.spec.js`
```js
const { test, expect } = require('@playwright/test');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../../testdata/sample_db.sqlite');

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
```

---

## Best Practices
- Use a dedicated test database (never production!)
- Clean up or reset data between tests if needed
- Use environment variables for DB credentials in real DBs
- For other DBs (Postgres, SQL Server), see `utils/DBActions.js`

---

## References
- [sqlite3 Node.js package](https://www.npmjs.com/package/sqlite3)
- [Playwright Test Docs](https://playwright.dev/docs/test-intro)
- [DBActions Utility](../utils/DBActions.js)

---

**This example can be extended for other databases and more advanced scenarios.**
