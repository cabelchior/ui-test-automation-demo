const I = actor();

class InventoryItem {
  #root: CodeceptJS.Locator;
  #name: CodeceptJS.Locator;
  #image: CodeceptJS.Locator;
  #description: CodeceptJS.Locator;
  #price: CodeceptJS.Locator;
  #addToCartButton: CodeceptJS.Locator;
  #removeFromCartButton: CodeceptJS.Locator;

  constructor(locator: CodeceptJS.Locator) {
    this.#root = locator;
    this.#name = this.#root.find('div.inventory_item_name');
    this.#image = this.#root.find('img.inventory_item_img');
    this.#description = this.#root.find('div.inventory_item_desc');
    this.#price = this.#root.find('div.inventory_item_price');
    this.#addToCartButton = this.#root.find('button').withText('Add to cart');
    this.#removeFromCartButton = this.#root.find('button').withText('Remove');
  }

  get root() {
    return this.#root;
  }

  get name() {
    return this.#name;
  }

  get image() {
    return this.#image;
  }

  get description() {
    return this.#description;
  }

  get price() {
    return this.#price;
  }

  get addToCartButton() {
    return this.#addToCartButton;
  }

  get removeFromCartButton() {
    return this.#removeFromCartButton;
  }

  async grabImageSrc() {
    return await I.grabAttributeFrom(this.image, 'src');
  }

  waitForRequiredElements() {
    I.waitForVisible(this.name);
    I.waitForVisible(this.image);
    I.waitForVisible(this.description);
    I.waitForVisible(this.price);
    I.waitForVisible(this.addToCartButton);
  }
}

class ProductListHeader {
  #root: CodeceptJS.Locator = locate('div#contents_wrapper > div#header_container');
  #title: CodeceptJS.Locator;
  #select: CodeceptJS.Locator;

  constructor() {
    this.#title = this.#root.find('span.title');
    this.#select = this.#root.find('select');
  }

  get title() {
    return this.#title;
  }

  get select() {
    return this.#select;
  }
}

class ProductListPage {
  #root: CodeceptJS.Locator = locate('div#contents_wrapper > div#inventory_container');
  #items: CodeceptJS.Locator;
  #productListHeader: ProductListHeader;

  constructor() {
    this.#items = this.#root.find('div.inventory_item');
    this.#productListHeader = new ProductListHeader();
  }

  get root() {
    return this.#root;
  }

  get items() {
    return this.#items;
  }

  get productListHeader() {
    return this.#productListHeader;
  }
  
  isLoaded() {
    I.waitForVisible(this.root);
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
