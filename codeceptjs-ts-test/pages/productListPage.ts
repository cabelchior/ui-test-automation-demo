const I = actor();

class ProductListPage {
  #root: CodeceptJS.Locator = locate('div#contents_wrapper > div#inventory_container');

  constructor() { }

  get root() {
    return this.#root;
  }

  isLoaded() {
    I.waitForVisible(this.root);
  }

}

export = new ProductListPage();
