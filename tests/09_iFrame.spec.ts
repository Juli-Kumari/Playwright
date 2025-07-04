import { expect, test } from '@playwright/test'


test('Handle iframe with name', async ({ page }) => {
    await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form')
    const w3Frame = page.frame('iframeResult')
    await w3Frame?.locator('#fname').fill('Test automation')
})
//   w3Frame?.locator('#fname').fill('Test automation')
// If w3Frame is not null or undefined, then run .locator(...).fill(...)."
// If w3Frame is null or undefined, then do nothing (and avoid a crash or error like Cannot read properties of null)

// Because page.frame(...) might return null if the frame doesn't exist or hasn’t loaded yet. So to avoid this error:
// TypeError: Cannot read properties of null (reading 'locator')

test('Handle iframe with URL', async ({ page }) => {
    await page.goto('https://www.w3schools.com/html/html_iframe.asp')
    const iframeLoc = page.frame('https://www.w3schools.com/html/default.asp')

    await iframeLoc?.getByRole('button', { name: 'Button to open search field' }).click()
   await iframeLoc?.locator('#tnb-google-search-input').fill('Test automation ....')
})

test('Handle iframe with frame loactor method', async ({ page }) => {
    await page.goto('https://www.w3schools.com/html/html_iframe.asp')

   const iframe2 = page.frameLocator("[title='W3Schools HTML Tutorial']")

   await iframe2?.getByRole('button', { name: 'Button to open search field' }).click()
   await iframe2?.locator('#tnb-google-search-input').fill('Test automation123')

})


