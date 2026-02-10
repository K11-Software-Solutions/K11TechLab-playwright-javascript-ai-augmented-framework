
const sql = require('mssql');
const { Client: PgClient } = require('pg');
const sqlite3 = require('sqlite3').verbose();
let sqlClient;
let pgClient;
let sqliteClient;

class DBActions {
    /**
     * Connect to a database
     * @param {'sql'|'postgres'} dbType
     */

    /**
     * Connect to a database
     * @param {'sql'|'postgres'|'sqlite'} dbType
     * For sqlite, dbName is the path to the .sqlite file
     */
    async connectDB(dbType, dbUsername, dbPassword, dbServerName, dbPort, dbName) {
        if (dbType === 'sql') {
            const config = {
                user: dbUsername,
                password: dbPassword,
                server: dbServerName,
                port: parseInt(dbPort, 10),
                database: dbName,
                options: {
                    encrypt: true,
                    trustServerCertificate: true
                }
            };
            sqlClient = await sql.connect(config);
        } else if (dbType === 'postgres') {
            const connectionString = `postgres://${dbUsername}:${dbPassword}@${dbServerName}:${dbPort}/${dbName}`;
            pgClient = new PgClient({ connectionString });
            await pgClient.connect();
        } else if (dbType === 'sqlite') {
            sqliteClient = new sqlite3.Database(dbName);
        } else {
            throw new Error('Unsupported dbType. Use "sql", "postgres", or "sqlite".');
        }
    }

    /**
     * Run a query
     * @param {string} queryString
     * @param {'sql'|'postgres'|'sqlite'} dbType
     * @returns {Promise<any>}
     */
    async query(queryString, dbType = 'sql') {
        if (dbType === 'sql') {
            return sqlClient.request().query(queryString);
        } else if (dbType === 'postgres') {
            return pgClient.query(queryString);
        } else if (dbType === 'sqlite') {
            // For SELECT, return all rows; for INSERT/UPDATE/DELETE, return info
            return new Promise((resolve, reject) => {
                if (/^\s*select/i.test(queryString)) {
                    sqliteClient.all(queryString, (err, rows) => {
                        if (err) reject(err);
                        else resolve({ rows });
                    });
                } else {
                    sqliteClient.run(queryString, function (err) {
                        if (err) reject(err);
                        else resolve({ changes: this.changes, lastID: this.lastID });
                    });
                }
            });
        } else {
            throw new Error('Unsupported dbType. Use "sql", "postgres", or "sqlite".');
        }
    }
}

module.exports = DBActions;
