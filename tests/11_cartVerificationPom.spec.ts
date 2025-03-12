import {expect, test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.spec'
import {HomePage} from '../pages/HomePage.spec'


test('Verification of cart', async({page})=>{
    const loginPage = new LoginPage(page)

    await loginPage.openApplication()
    await loginPage.login("standard_user", "secret_sauce")

    const homePage = new HomePage(page)

    await expect(homePage.homePageHeading).toHaveText("Swag Labs")

   await homePage.clickOnAddToCard()
   await expect(homePage.removeButton).toBeVisible()
   await homePage.clickOnRemoveButton()


})