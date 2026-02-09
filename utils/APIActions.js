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
        for (let responseKey of responsePart) {
            if (!(expectedResponseHeaderParams.includes(responseKey.name.trim()))) {
                status = false;
                fieldNames = fieldNames + ' ,' + responseKey.name;
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
