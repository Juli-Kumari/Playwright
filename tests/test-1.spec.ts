import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await expect(page.getByText('Full Name')).toBeVisible();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('JUli');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('juli@hgmaill.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Email:juli@hgmaill.com').click();
  await expect(page.getByText('Name:JUli')).toBeVisible();
  await page.getByText('Email:juli@hgmaill.com').click();
});