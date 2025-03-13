import { expect } from '@playwright/test'
import { test } from '../fixtures/POMfixtures'

test('Verification of cart', async ({ page, loginPage, homePage }) => {

    await loginPage.openApplication()
    await loginPage.login("standard_user", "secret_sauce")

    await expect(homePage.homePageHeading).toHaveText("Swag Labs")

    await homePage.clickOnAddToCard()
    await expect(homePage.removeButton).toBeVisible()
    await homePage.clickOnRemoveButton()


})