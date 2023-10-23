import { expect, Locator, Page } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly root: Locator
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly submitInput: Locator
  readonly errorMessage: Locator

  // https://playwright.dev/docs/locators
  constructor(page: Page) {
    this.page = page
    this.root = page.locator('div.login_container')
    this.usernameInput = this.root.locator('input[placeholder="Username"]')
    this.passwordInput = this.root.getByPlaceholder('Password')
    this.submitInput = this.root.getByText('Login')
    this.errorMessage = this.root.locator('h3', { has: this.page.locator('button.error-button') })
  }

  async goTo() {
    await this.page.goto('/')
    await expect(this.page.getByText('Swag Labs')).toBeVisible();
  }

  async logIn(credentials: Credentials) {
    await this.usernameInput.fill(credentials.username)
    await this.passwordInput.fill(credentials.password)
    await this.submitInput.click()
  }

}
