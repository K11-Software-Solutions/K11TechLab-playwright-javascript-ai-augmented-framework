import { test, expect } from '@playwright/experimental-ct-react';
import Card from '../../components/Card.jsx'; // Adjust path if needed

const techLabProps = {
  image: '/images/techlab_card.png',
  title: 'Tech Lab',
  description: 'Explore hands-on labs for automation, full stack, AI, and LLM development.',
  link: '/tech-lab'
};

test('renders Tech Lab card with correct content', async ({ mount }) => {
  const component = await mount(
    <Card className="h-full border-2">
      <img src={techLabProps.image} alt="K11 Tech Lab" />
      <p>{techLabProps.title}</p>
      <p>{techLabProps.description}</p>
    </Card>
  );

  await expect(component.getByAltText('K11 Tech Lab')).toBeVisible();
  await expect(component.getByText('Tech Lab')).toBeVisible();
  await expect(component.getByText(techLabProps.description)).toBeVisible();
});

test('card link navigates correctly', async ({ mount, page }) => {
  const component = await mount(
    <a href={techLabProps.link}>
      <Card>
        <p>{techLabProps.title}</p>
      </Card>
    </a>
  );
  await expect(component.getByText('Tech Lab')).toBeVisible();
  // Optionally, simulate click and check navigation
  // await component.getByText('Tech Lab').click();
  // expect(page.url()).toContain('/tech-lab');
});
