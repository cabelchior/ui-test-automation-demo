import { expect, Locator, Page } from '@playwright/test'

export class InventoryItem {
  readonly page: Page
  readonly root: Locator
  readonly name: Locator

  constructor(page: Page, locator: Locator) {
    this.page = page
    this.root = locator
    this.name = this.root.locator('div.inventory_item_name');
  }
}