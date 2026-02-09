require('../../hooks/hook');
require('../../playwright-fixtures');
import { test, expect } from '@playwright/experimental-ct-react';
import HeroCarousel from '../../components/HeroCarousel.jsx';

// Fixtures
const mockSlides = [
  { image: 'data:image/png;base64,iVBORw0K...', title: 'Tech Lab', description: '...' },
  { image: 'data:image/png;base64,iVBORw0K...', title: 'Insights', description: '...' },
];

// Hooks
test.beforeEach(async ({}, testInfo) => {
  // You can add setup logic here, e.g., logging
  // console.log(`Starting test: ${testInfo.title}`);
});

test.afterEach(async ({}, testInfo) => {
  // You can add teardown logic here, e.g., cleanup
  // console.log(`Finished test: ${testInfo.title}`);
});

test('mounts HeroCarousel component', async ({ mount }) => {
  const component = await mount(<HeroCarousel slides={mockSlides} intervalMs={200} />);
  await expect(component).toBeVisible();
});

test('cycles quickly with a short interval', async ({ mount }) => {
  const component = await mount(<HeroCarousel slides={mockSlides} intervalMs={200} />);

  // Assert the first slide is visible
  await expect(component.getByRole('heading', { name: 'Tech Lab' })).toBeVisible({ timeout: 2000 });

  // Wait for the second slide to appear, allow for animation
  await expect(component.getByRole('heading', { name: 'Insights' })).toBeVisible({ timeout: 5000 });
});
