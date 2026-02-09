const sql = require('mssql');
const { Client: PgClient } = require('pg');

let sqlClient;
let pgClient;

class DBActions {
    /**
     * Connect to a database
     * @param {'sql'|'postgres'} dbType
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
        } else {
            throw new Error('Unsupported dbType. Use "sql" or "postgres".');
        }
    }

    async query(queryString, dbType = 'sql') {
        if (dbType === 'sql') {
            return sqlClient.request().query(queryString);
        } else if (dbType === 'postgres') {
            return pgClient.query(queryString);
        } else {
            throw new Error('Unsupported dbType. Use "sql" or "postgres".');
        }
    }
}

module.exports = DBActions;
