import { expect, test } from '@playwright/test'

test('Handle Dialogs or JavaScript: Alert', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    //write anonymous function
    page.on("dialog", dialog => {
        expect(dialog.type()).toEqual('alert')
        expect(dialog.message()).toEqual('I am a JS Alert')
        dialog.accept()
    })

    await page.getByRole('button', { name: 'Click for JS Alert' }).click()

    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')

})

test('Handle Dialogs or JavaScript: Confirm', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
// accept
    page.on('dialog', dialog => {
        expect(dialog.type()).toEqual('confirm')
        expect(dialog.message()).toEqual('I am a JS Confirm')
        dialog.accept()
    })

    await page.getByRole('button', { name: 'Click for JS Confirm' }).click()

    await expect(page.locator('#result')).toHaveText('You clicked: Ok')

    // // cancle
    // page.on('dialog', dialog => {
    //     expect(dialog.type()).toEqual('confirm')
    //     expect(dialog.message()).toEqual('I am a JS Confirm')
    //     dialog.dismiss()
    // })

    // await page.getByRole('button', { name: 'Click for JS Confirm' }).click()

    // await expect(page.locator('#result')).toHaveText('You clicked: Cancel')

})

test('Handle Dialogs or JavaScript: Prompt', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog', dialog =>{
        expect(dialog.type()).toEqual('prompt')
        expect(dialog.message()).toEqual('I am a JS prompt')
        expect(dialog.defaultValue()).toEqual("")
        dialog.accept()
    })

    await page.getByRole('button', { name: 'Click for JS Prompt' }).click()
})