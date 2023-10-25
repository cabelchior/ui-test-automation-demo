const I = actor();

class ProductDetailHeader {
  #root: CodeceptJS.Locator = locate('div.header_container > div.header_secondary_container');
  readonly backButton: CodeceptJS.Locator;

  constructor() {
    this.backButton = this.#root.find('button').withText('Back to products')
  }


}

class ProductDetailPage {
  #root: CodeceptJS.Locator = locate('div#contents_wrapper > div.inventory_item_container');

  constructor() { }

  get root() {
    return this.#root;
  }
}

export = new ProductDetailPage();