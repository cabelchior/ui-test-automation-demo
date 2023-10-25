import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { ProductListPage } from '../pages/productListPage'

type Fixtures = {
  loginPage: LoginPage
  productListPage: ProductListPage
}

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    await use(loginPage)
  },

  productListPage: async ({ page, loginPage }, use) => {
    const productListPage = new ProductListPage(page)

    let credentials: Credentials = {
      username: 'standard_user',
      password: 'secret_sauce',
    }
    await loginPage.goTo()
    await loginPage.logIn(credentials)
    
    await productListPage.isLoaded()
    await use(productListPage)
  },
})
