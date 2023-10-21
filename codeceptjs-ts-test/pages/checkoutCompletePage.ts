const I = actor();

class CheckoutCompletePage {
  #root: CodeceptJS.Locator = locate('div#contents_wrapper > div.checkout_complete_container');

  constructor() { }

  get root() {
    return this.#root;
  }
}

export = new CheckoutCompletePage();