const { test, expect } = require('@playwright/test');
const { saveApiResponse } = require('../../utils/saveApiResponse');

const JSONPLACEHOLDER_API_URL = 'https://jsonplaceholder.typicode.com';

test.describe('JSONPlaceholder API Integration', () => {
  test('should GET a post', async ({ request }) => {
    const response = await request.get(`${JSONPLACEHOLDER_API_URL}/posts/1`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    saveApiResponse('jsonplaceholder_get_post', body);
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('body');
  });

  test('should POST a new post', async ({ request }) => {
    const payload = { title: 'foo', body: 'bar', userId: 1 };
    const response = await request.post(`${JSONPLACEHOLDER_API_URL}/posts`, {
      data: payload,
      headers: { 'Accept': 'application/json' }
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    saveApiResponse('jsonplaceholder_post_post', body);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('title', 'foo');
    expect(body).toHaveProperty('body', 'bar');
    expect(body).toHaveProperty('userId', 1);
  });
});
