import {test} from '@playwright/test';
import { equal } from 'assert';

test("click mentho", async({page})=> {
await page.goto("https://en.wikipedia.org/wiki/World_Wide_Web")
await page.getByRole('link', { name: 'History', exact: true }).click()
await page.getByRole('link', { name: 'History', exact: true }).dblclick()

await page.getByRole('link', { name: 'History', exact: true }).click({button: 'right'})

await page.getByRole('link', { name: 'History', exact: true }).dispatchEvent('click')


})
