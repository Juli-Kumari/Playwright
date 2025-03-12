import {test} from '@playwright/test'

test('Handle multi select dropdown', async({page})=>{
await page.goto('https://demoqa.com/select-menu')
await page.locator('#cars').selectOption('Volvo')

await page.locator('#cars').selectOption(['Audi', 'Opel'])
})