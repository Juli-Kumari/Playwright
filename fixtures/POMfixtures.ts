import { test as baseTest } from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.spec'
import { HomePage } from '../pages/HomePage.spec'

type myPomFixture = {
    loginPage: LoginPage,
    homePage: HomePage
}
export const test = baseTest.extend<myPomFixture>({
    loginPage: async({page}, use)=> {
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },
    homePage: async({page}, use)=> {
        const homePage = new HomePage(page)
        await use(homePage)
    }
})

