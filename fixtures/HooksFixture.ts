// import test
import { test as baseTest } from '@playwright/test'

// define type
type MyHookFixture = {
    loginLogoutFixture: any
}
// export it, use use in test script file
export const test = baseTest.extend<MyHookFixture>({
    // write annosy. function
    loginLogoutFixture: async ({ }, use) => {
        const loginLogoutFixture = undefined
        // before each -> login
        console.log("Before each-----Login----")
        // run tests
        await use(loginLogoutFixture)

        // after each -> logout
        console.log("After each-----Logout")

    }

})

export {expect} from '@playwright/test'
