import { Locator, Page } from "@playwright/test";

// create class
export class LoginPage {

    // Properties.  readonly-> once it's initialize it will never modify
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator

    // 1. create construction to initialize the value
    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('#login-button')
    }

    async openApplication(){
        await this.page.goto('https://www.saucedemo.com/')
    }
    // methods
    async login(username: string, password: string) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}