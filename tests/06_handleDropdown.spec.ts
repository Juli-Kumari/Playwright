import{expect, test} from '@playwright/test'

test('Handle Dropdown using text and value', async({page})=>{
  await page.goto("https://artoftesting.com/samplesiteforselenium")
//   await page.locator('#testingDropdown').selectOption('Automation')
//   await page.locator('#testingDropdown').selectOption('Performance Testing')

await page.locator('#testingDropdown').selectOption({value: 'Automation'})
await page.locator('#testingDropdown').selectOption({label: 'Performance Testing'})

await page.locator('#testingDropdown').selectOption({index: 0})
})


test('Handle Dropdown using level', async({page})=>{
    await page.goto("https://artoftesting.com/samplesiteforselenium")
    await page.getByLabel('#testingDropdown').selectOption('Automation')
})

