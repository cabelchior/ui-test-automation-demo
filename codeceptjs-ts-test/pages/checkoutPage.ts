const I = actor();

class CheckoutPage {
  #root: CodeceptJS.Locator = locate('div#contents_wrapper > div.checkout_info_container');

  constructor() { }

  get root() {
    return this.#root;
  }
}

export = new CheckoutPage();