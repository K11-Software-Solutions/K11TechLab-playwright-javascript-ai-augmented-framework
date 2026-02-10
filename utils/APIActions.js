const fs = require('fs');
const { expect } = require('@playwright/test');

class APIActions {
    async verifyStatusCode(response) {
        await expect(response, '200 Status code was not displayed.').toBeOK();
    }

    async verifyResponseBody(expectedResponseBodyParams, responsePart, responseType) {
        let status = true;
        let fieldNames = 'Parameter';
        const headers = expectedResponseBodyParams.split('|');
        const responseToString = JSON.stringify(responsePart).trim();
        for (let headerKey of headers) {
            if (!(responseToString.includes(headerKey.trim()))) {
                status = false;
                fieldNames = fieldNames + ', ' + headerKey;
                break;
            }
        }
        expect(status, `${fieldNames} was not present in ${responseType}`).toBe(true);
    }

    async verifyResponseHeader(expectedResponseHeaderParams, responsePart, responseType) {
        let status = true;
        let fieldNames = 'Parameter';
        // Support both arrays of header objects ({name: ...}) and arrays of header name strings
        const headerNames = responsePart.map(h => typeof h === 'string' ? h.toLowerCase() : (h.name ? h.name.toLowerCase() : ''));
        for (let expectedHeader of expectedResponseHeaderParams) {
            if (!headerNames.includes(expectedHeader.toLowerCase())) {
                status = false;
                fieldNames = fieldNames + ', ' + expectedHeader;
                break;
            }
        }
        expect(status, `${fieldNames} was not present in ${responseType}`).toBe(true);
    }

    async readValuesFromTextFile(fileName) {
        return fs.readFileSync(`./utils/api/${fileName}.txt`, 'utf8');
    }
}

module.exports = APIActions;
