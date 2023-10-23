import { expect } from '@playwright/test'
import { test } from '../../helpers/fixtures'

/*** Feature Global Variables ***/

const invalidUsername = [
  {
    username: '',
    errorMessage: 'Epic sadface: Username is required',
  },
  {
    username: 'invalid_user',
    errorMessage: 'Epic sadface: Username and password do not match any user in this service',
  },
  {
    username: "'); DROP TABLE *;--",
    errorMessage: 'Epic sadface: Username and password do not match any user in this service',
  },
]

const invalidPassword = [
  {
    password: '',
    errorMessage: 'Epic sadface: Password is required',
  },
  {
    password: 'invalid_pass',
    errorMessage: 'Epic sadface: Username and password do not match any user in this service',
  },
  {
    password: "'); DROP TABLE *;--",
    errorMessage: 'Epic sadface: Username and password do not match any user in this service',
  },
]

/*** Test Cases ***/

test.describe('Login Page', () => {
  test('The user logs in with a valid username/password', async ({ page, loginPage }) => {
    let credentials: Credentials = {
      username: 'standard_user',
      password: 'secret_sauce',
    }

    await page.goto('/')
    await loginPage.logIn(credentials)

    await expect(loginPage.errorMessage, { message: 'There is no visible error message after the login procedure' }).not.toBeVisible()

    // await page.pause()
  })

  test('The user tries to logs in with locked out credentials', async ({ page, loginPage }) => {
    let credentials: Credentials = {
      username: 'locked_out_user',
      password: 'secret_sauce',
    }

    await page.goto('/')
    await loginPage.logIn(credentials)

    await expect(loginPage.errorMessage, { message: 'There is an error message after the login procedure' }).toBeVisible()
    await expect(loginPage.errorMessage.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible()

    // await page.pause();
  })

  invalidUsername.forEach((data) => {
    test(`The user tries to logs in with invalid username: '${data.username}'`, async ({ page, loginPage }) => {
      let credentials: Credentials = {
        username: data.username,
        password: 'secret_sauce',
      }

      await page.goto('/')
      await loginPage.logIn(credentials)

      await expect(loginPage.errorMessage, { message: 'There is an error message after the login procedure' }).toBeVisible()
      await expect(loginPage.errorMessage.getByText(data.errorMessage)).toBeVisible()

      // await page.pause();
    })
  })

  invalidPassword.forEach((data) => {
    test(`The user tries to logs in with invalid password: '${data.password}'`, async ({ page, loginPage }) => {
      let credentials: Credentials = {
        username: 'standard_user',
        password: data.password,
      }

      await page.goto('/')
      await loginPage.logIn(credentials)

      await expect(loginPage.errorMessage, { message: 'There is an error message after the login procedure' }).toBeVisible()
      await expect(loginPage.errorMessage.getByText(data.errorMessage)).toBeVisible()

      // await page.pause();
    })
  })
})
