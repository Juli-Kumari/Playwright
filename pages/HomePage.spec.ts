import { Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page
    readonly homePageHeading: Locator
    readonly addToCardButton: Locator
    readonly removeButton: Locator

    constructor(page: Page) {
        this.page = page
        this.homePageHeading = page.locator('.app_logo')
        this.addToCardButton = page.locator('#add-to-cart-sauce-labs-backpack')
        this.removeButton = page.locator('#remove-sauce-labs-backpack')
    }

    async clickOnAddToCard() {
        await this.addToCardButton.click()
    }

    async clickOnRemoveButton() {
        await this.removeButton.click()
    }
}