import {chromium, test} from "@playwright/test";

test('page fixture, await/async methods', async({page})=>{
    await page.goto("https://www.google.com/")
    console.log("1st block")
})

test('without page fixture', async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.google.com/")
    console.log("2nd block")
})