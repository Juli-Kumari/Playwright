import { expect, test } from '@playwright/test'


test('Handle New Page', async ({ context }) => {
    const page = await context.newPage()
    await page.goto('https://demoqa.com/browser-windows')
    await expect(page).toHaveTitle('DEMOQA')
    //before click -> write listener
    const pagePromise = context.waitForEvent("page")
    await page.locator('#tabButton').click()

    const newPage = await pagePromise

    await expect(newPage.locator('#sampleHeading')).toHaveText('This is a sample page')
})

