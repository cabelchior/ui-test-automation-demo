import { expect } from '@playwright/test'
import { test } from '../../helpers/fixtures'

/*** Feature Global Variables ***/

/*** Test Cases ***/

test.describe('Product List Page', () => {
  test('@wip The PLP has all the requided sections', async ({ page, productListPage }) => {
    await productListPage.clickItemAtIndex(1)

    await page.pause()
  })

  
})