const I = actor();

class CheckoutOverviewPage {
  #root: CodeceptJS.Locator = locate('div#contents_wrapper > div.checkout_summary_container');

  constructor() { }

  get root() {
    return this.#root;
  }
}

export = new CheckoutOverviewPage();