import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await expect(page.getByRole('heading', { name: 'Text Box' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('J');
  await page.getByRole('textbox', { name: 'Full Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Juli');
  await expect(page.getByRole('textbox', { name: 'Full Name' })).toHaveValue('Juli');
  await page.locator('#currentAddress-wrapper div').filter({ hasText: 'Current Address' }).click();
  await expect(page.locator('#currentAddress-label')).toContainText('Current Address');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Name:Juli').click();
  await expect(page.locator('#name')).toContainText('Name:Juli');
});