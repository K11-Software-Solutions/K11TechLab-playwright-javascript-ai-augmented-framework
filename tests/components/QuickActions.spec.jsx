require('../../hooks/hook');
require('../../playwright-fixtures');
import { test, expect } from '@playwright/experimental-ct-react';
import QuickActions from '../../components/QuickActions.jsx';

// Test Tech Lab card rendering

test('renders Tech Lab card with correct content', async ({ mount }, testInfo) => {
  const component = await mount(<QuickActions />);
  const card = component.locator('#home-tech-lab-link');
  await expect(card).toBeVisible();
  await expect(component.getByAltText('K11 Tech Lab')).toBeVisible();
  await expect(component.getByText('Tech Lab')).toBeVisible();
  await expect(component.getByText('Explore hands-on labs for automation, full stack, AI, and LLM development.')).toBeVisible();
  await card.screenshot({ path: `screenshots/QuickActions.spec/TechLab_${testInfo.title}.png` });
});

// Test Insights card rendering

test('renders Insights card with correct content', async ({ mount }, testInfo) => {
  const component = await mount(<QuickActions />);
  const card = component.locator('#home-insights-link');
  await expect(card).toBeVisible();
  await expect(component.getByAltText('Insights')).toBeVisible();
  await expect(component.locator('#home-insights-title')).toBeVisible();
  await expect(component.getByText('Discover trends, best practices, and expert tips for your team.')).toBeVisible();
  await card.screenshot({ path: `screenshots/QuickActions.spec/Insights_${testInfo.title}.png` });
});

// Test Services card rendering

test('renders Services card with correct content', async ({ mount }, testInfo) => {
  const component = await mount(<QuickActions />);
  const card = component.locator('#home-services-link');
  await expect(card).toBeVisible();
  await expect(component.getByAltText('Services')).toBeVisible();
  await expect(component.getByText('Services')).toBeVisible();
  await expect(component.getByText('Explore AI tools, custom software, and automation options.')).toBeVisible();
  await card.screenshot({ path: `screenshots/QuickActions.spec/Services_${testInfo.title}.png` });
});

// Test Dashboard card rendering

test('renders Dashboard card with correct content', async ({ mount }, testInfo) => {
  const component = await mount(<QuickActions />);
  const card = component.locator('#home-dashboard-link');
  await expect(card).toBeVisible();
  await expect(component.getByAltText('Dashboard')).toBeVisible();
  await expect(component.getByText('Dashboard')).toBeVisible();
  await expect(component.getByText('View insights, activity, and key metrics at a glance.')).toBeVisible();
  await card.screenshot({ path: `screenshots/QuickActions.spec/Dashboard_${testInfo.title}.png` });
});
