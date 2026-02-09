const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');
const DBActions = require('./DBActions');

class DataProvider {
    // Fetch data from Excel file (returns array of objects)
    static async fetchDataFromExcel(filePath, sheetName = null) {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        const sheet = sheetName ? workbook.getWorksheet(sheetName) : workbook.worksheets[0];
        const rows = [];
        const headers = [];
        sheet.getRow(1).eachCell((cell, colNumber) => {
            headers.push(cell.value);
        });
        sheet.eachRow((row, rowNumber) => {
            if (rowNumber === 1) return;
            const rowData = {};
            row.eachCell((cell, colNumber) => {
                rowData[headers[colNumber - 1]] = cell.value;
            });
            rows.push(rowData);
        });
        return rows;
    }

    // Fetch data from JSON file
    static fetchDataFromJson(filePath) {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }

    // Fetch data from CSV file (returns array of objects)
    static fetchDataFromCsv(filePath) {
        const data = fs.readFileSync(filePath, 'utf-8');
        const [headerLine, ...lines] = data.split(/\r?\n/).filter(Boolean);
        const headers = headerLine.split(',');
        return lines.map(line => {
            const values = line.split(',');
            const obj = {};
            headers.forEach((h, i) => { obj[h] = values[i]; });
            return obj;
        });
    }

    // Fetch data from DB (returns array of objects)
    static async fetchDataFromDb(query, dbType = 'mssql', dbConfig = {}) {
        const db = new DBActions(dbType, dbConfig);
        return await db.executeQuery(query);
    }
}

module.exports = DataProvider;
