const { test, expect } = require('@playwright/test');
const APIActions = require('../../utils/APIActions');
const { saveApiResponse } = require('../../utils/saveApiResponse');

const JSONPLACEHOLDER_API_URL = 'https://jsonplaceholder.typicode.com';
const apiActions = new APIActions();

test.describe('API Actions Utility Integration', () => {
  test('should GET a post and verify status and body fields', async ({ request }) => {
    const response = await request.get(`${JSONPLACEHOLDER_API_URL}/posts/1`);
    await apiActions.verifyStatusCode(response);
    const body = await response.json();
    saveApiResponse('apiactions_get_post', body);
    await apiActions.verifyResponseBody('userId|id|title|body', body, 'JSON Body');
  });

  test('should POST a new post and verify status and response', async ({ request }) => {
    const payload = { title: 'foo', body: 'bar', userId: 1 };
    const response = await request.post(`${JSONPLACEHOLDER_API_URL}/posts`, {
      data: payload,
      headers: { 'Accept': 'application/json' }
    });
    await apiActions.verifyStatusCode(response);
    const body = await response.json();
    saveApiResponse('apiactions_post_post', body);
    await apiActions.verifyResponseBody('id|title|body|userId', body, 'JSON Body');
  });

  test('should print and verify response headers for GET', async ({ request }) => {
    const response = await request.get(`${JSONPLACEHOLDER_API_URL}/posts/1`);
    await apiActions.verifyStatusCode(response);
    const headers = response.headersArray();
    // Print all response headers for debugging
    console.log('Actual response headers:', headers.map(h => h.name));
    // Only check for 'content-type' which should always be present
    await apiActions.verifyResponseHeader(['content-type'], headers, 'Headers');
  });
});
