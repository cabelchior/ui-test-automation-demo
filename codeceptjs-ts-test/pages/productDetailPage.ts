const I = actor();

class ProductDetailPage {
  #root: CodeceptJS.Locator = locate('div#contents_wrapper > div.inventory_item_container');

  constructor() { }

  get root() {
    return this.#root;
  }
}

export = new ProductDetailPage();