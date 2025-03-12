import{expect, test} from '@playwright/test'

test('Handle Checkbox', async({page})=>{
  await page.goto("https://artoftesting.com/samplesiteforselenium")
  const automationCheckbox = await page.locator('.Automation')
  automationCheckbox.check()
  await expect(automationCheckbox).toBeChecked()
  const performanceCheckbox = await page.locator('.Performance')
  await expect(performanceCheckbox).not.toBeChecked()
  performanceCheckbox.check()
  await expect(performanceCheckbox).toBeChecked()

  if(await performanceCheckbox.isChecked()){
    performanceCheckbox.uncheck()
    console.log('uncheck performance checkbox')
    await expect(performanceCheckbox).not.toBeChecked()
  }
})