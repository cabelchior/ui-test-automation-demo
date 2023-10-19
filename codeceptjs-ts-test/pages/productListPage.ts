const I = actor();

class InventoryItem {
  #root: CodeceptJS.Locator;
  #name: CodeceptJS.Locator;
  #image: CodeceptJS.Locator;
  #description: CodeceptJS.Locator;
  #price: CodeceptJS.Locator;
  #addToCartButton: CodeceptJS.Locator;

  constructor(locator: CodeceptJS.Locator) {
    this.#root = locator;
    this.#name = this.#root.find('div.inventory_item_name');
    this.#image = this.#root.find('img.inventory_item_img');
    this.#description = this.#root.find('div.inventory_item_desc');
    this.#price = this.#root.find('div.inventory_item_price');
    this.#addToCartButton = this.#root.find('button').withText('Add to cart');
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

  async grabImageSrc() {
    return await I.grabAttributeFrom(this.image, 'src');
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

  sortItemsBy(option: string) {
    I.selectOption(this.productListHeader.select, option);
  }
}

export = new ProductListPage();
