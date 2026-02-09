// Utility to save API responses to a file
const fs = require('fs');
const path = require('path');

/**
 * Save JSON response to the apiresponse folder with a timestamped filename.
 * @param {string} testName - Name of the test or scenario
 * @param {object} data - JSON data to save
 */
function saveApiResponse(testName, data) {
  const folder = path.join(process.cwd(), 'apiresponse');
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const file = path.join(folder, `${testName}_${timestamp}.json`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

module.exports = { saveApiResponse };
