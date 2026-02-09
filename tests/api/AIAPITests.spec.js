const { test, expect, request } = require('@playwright/test');
const APIActions = require('../../utils/APIActions');


const { saveApiResponse } = require('../../utils/saveApiResponse');
const apiActions = new APIActions();

// Example AI API endpoint (replace with your actual AI endpoint)
// Using Advice Slip API (no auth required)
const AI_API_URL = 'https://api.adviceslip.com/advice';

// Test: Validate AI response status and structure

test.describe('AI API Integration', () => {

  test('should return 200 and expected fields for advice', async ({ request }) => {
    const response = await request.get(AI_API_URL, {
      headers: { 'Accept': 'application/json' }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    saveApiResponse('advice', body);
    // Advice Slip returns { slip: { id, advice } }
    expect(body).toHaveProperty('slip');
    expect(body.slip).toHaveProperty('advice');
    expect(typeof body.slip.advice).toBe('string');
  });


  test('should handle invalid endpoint gracefully', async ({ request }) => {
    const response = await request.get(AI_API_URL + '/invalid');
    expect([404, 500]).toContain(response.status());
    const body = await response.json().catch(() => ({}));
    saveApiResponse('advice_error', body);
    // The API returns 404 for invalid endpoints
  });

  // Add more AI API tests as needed
});
