// Generic AI-powered Test Generator
// Place this in ai/
// Requires: npm install openai

const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');

// Example input files

const appConfig = require('../config/appConfig');
const csvPath = path.join(__dirname, '..', appConfig.testDataPath);
const apiPath = path.join(__dirname, '..', appConfig.apiEndpointsPath);
const dbConfigPath = path.join(__dirname, '..', appConfig.dbConfigPath);

const configData = JSON.stringify(appConfig, null, 2);
const csvData = fs.existsSync(csvPath) ? fs.readFileSync(csvPath, 'utf8') : '';
const apiData = fs.existsSync(apiPath) ? fs.readFileSync(apiPath, 'utf8') : '';
const dbConfigData = fs.existsSync(dbConfigPath) ? fs.readFileSync(dbConfigPath, 'utf8') : '';

const outputPath = path.join(__dirname, '../tests/mab/AI_GeneratedTest.spec.js');

// ...existing code...
// To generate login tests, use the login prompt file:
const promptTemplatePath = path.join(__dirname, '../prompts/playwright_login_test_generation.txt');
let prompt = fs.readFileSync(promptTemplatePath, 'utf8');
prompt = prompt.replace('{{config}}', configData)
               .replace('{{csv}}', csvData)
               .replace('{{api}}', apiData)
               .replace('{{db}}', dbConfigData);


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateTest() {
  const response = await openai.completions.create({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 1500,
    temperature: 0.2,
  });
  const testCode = response.choices[0].text;
  fs.writeFileSync(outputPath, testCode);
  console.log('AI-generated test file:', outputPath);
}

generateTest();
