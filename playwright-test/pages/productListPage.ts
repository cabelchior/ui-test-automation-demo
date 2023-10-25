import { expect, Locator, Page } from '@playwright/test'
import { InventoryItem } from './fragments/inventoryItem'

class ProductListHeader {
  readonly page: Page
  readonly root: Locator
  readonly title: Locator
  readonly select: Locator

  constructor(page: Page) {
    this.page = page
    this.root = page.locator('div#contents_wrapper > div#header_container')
    this.title = this.root.locator('span.title')
    this.select = this.root.locator('select')
  }
}

export class ProductListPage {
  readonly page: Page
  readonly root: Locator
  readonly items: Locator
  readonly productListHeader: ProductListHeader

  constructor(page: Page) {
    this.page = page
    this.root = page.locator('div#contents_wrapper > div#inventory_container')
    this.items = this.root.locator('div.inventory_item')
    this.productListHeader = new ProductListHeader(this.page)
  }

  async isLoaded() {
    await expect(this.productListHeader.title).toHaveText('Products')
  }

  grabItemAtIndex(index: number) {
    return new InventoryItem(this.page, this.items.nth(index))
  }

  async clickItemAtIndex(index: number) {
    await this.grabItemAtIndex(index).name.click()
  }
}
