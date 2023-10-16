const I = actor();

class HeaderPage {
  #root: CodeceptJS.Locator = locate('div.header_container');

  constructor() { }

  get root() {
    return this.#root;
  }

  isLoaded() {
    I.waitForVisible(this.root);
  }

}

export = new HeaderPage();