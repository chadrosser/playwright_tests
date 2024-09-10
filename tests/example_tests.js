// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('home page title is correct', async ({ page }) => {
  await page.goto('http://example.com');
  await expect(page).toHaveTitle('Example Domain');
});

test('main heading contains correct text', async ({ page }) => {
  await page.goto('http://example.com');
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Example Domain');
});

test('link to more information exists and works', async ({ page }) => {
  await page.goto('http://example.com');
  const moreInfoLink = page.locator('a[href="http://www.iana.org/domains/example"]');
  await expect(moreInfoLink).toBeVisible();
  await moreInfoLink.click();
  await expect(page).toHaveURL('http://www.iana.org/domains/example');
});
