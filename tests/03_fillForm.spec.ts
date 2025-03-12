import {test} from '@playwright/test';

 test('Fill form', async({page})=>{
    await page.goto("https://ultimateqa.com/filling-out-forms/")
    await page.locator('#et_pb_contact_name_0').fill("My name field.....")
    await page.locator('#et_pb_contact_message_0').fill("Hi, I'm juli......")
 })

 test('Press sequentially', async({page})=>{
await page.goto("https://www.google.com/")
await page.getByRole('combobox', { name: 'Search' }).pressSequentially("ultimate qa",{delay: 1000})

 })

 test('Press Keys', async({page})=>{
    await page.goto("https://www.google.com/")
    await page.getByRole('combobox', { name: 'Search' }).pressSequentially("ultimate", {delay:1000})
    // await page.getByRole('combobox', { name: 'Search' }).press("Backspace")
    await page.getByRole('combobox', { name: 'Search' }).press("ArrowDown+ArrowDown+ArrowDown")
    // await page.getByRole('combobox', { name: 'Search' }).press("Enter")
 })
 