const I = actor();

class CartPage {
  #root: CodeceptJS.Locator = locate('div#contents_wrapper > div.cart_contents_container');

  constructor() { }

  get root() {
    return this.#root;
  }
}

export = new CartPage();