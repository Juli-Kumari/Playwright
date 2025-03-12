import{expect, test} from '@playwright/test'

test('Handle Radio button', async({page})=>{
  await page.goto("https://practice.expandtesting.com/radio-buttons")
  const yellowRadioCheckbox = await page.getByRole('radio', { name: 'Yellow' })
  yellowRadioCheckbox.check()
  await expect(yellowRadioCheckbox).toBeChecked()
})