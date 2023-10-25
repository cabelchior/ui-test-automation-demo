import { InventoryItem } from './fragments/inventoryItem'

const I = actor();

class ProductListHeader {
  readonly #root: CodeceptJS.Locator = locate('div.header_container > div.header_secondary_container');
  readonly title: CodeceptJS.Locator;
  readonly select: CodeceptJS.Locator;

  constructor() {
    this.title = this.#root.find('span.title');
    this.select = this.#root.find('select');
  }
}

class ProductListPage {
  readonly root: CodeceptJS.Locator = locate('div#contents_wrapper > div#inventory_container');
  readonly items: CodeceptJS.Locator;
  readonly productListHeader: ProductListHeader;

  constructor() {
    this.items = this.root.find('div.inventory_item');
    this.productListHeader = new ProductListHeader();
  }

  isLoaded() {
    I.seeElementInDOM(this.root);
    I.see('Products', this.productListHeader.title);
  }

  grabItemAtIndex(index: number) {
    return new InventoryItem(this.items.at(index));
  }

  async grabNumberOfItems() {
    return await I.grabNumberOfVisibleElements(this.items);
  }

  clickItemWithTitle(title: string) {
    I.click(this.items.withDescendant('div.inventory_item_name').withText(title));
  }

  clickItemAtIndex(index: number) {
    I.click(this.grabItemAtIndex(index).name);
  }

  sortItemsBy(option: string) {
    I.selectOption(this.productListHeader.select, option);
  }

  async grabItemNameAtIndex(index: number) {
    return (await I.grabTextFrom(this.grabItemAtIndex(index).name)).toLowerCase()
  }

  async grabItemPriceAtIndex(index: number) {
    return +((await I.grabTextFrom(this.grabItemAtIndex(index).price)).replace('$',''))
  }

  clickAddToCartAtIndex(index: number) {
    I.click(this.grabItemAtIndex(index).addToCartButton);
  }

  clickRemoveFromCartAtIndex(index: number) {
    I.click(this.grabItemAtIndex(index).removeFromCartButton);
  }

}

export = new ProductListPage();
