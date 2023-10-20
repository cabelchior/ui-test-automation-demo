const I = actor();
const tryTo = codeceptjs.container.plugins('tryTo');

class HeaderPage {
  #root: CodeceptJS.Locator = locate('div.header_container > div.primary_header');
  #menuContainer: CodeceptJS.Locator;
  #burgerButton: CodeceptJS.Locator;
  #burgerItems: CodeceptJS.Locator;
  #burgerCloseButton: CodeceptJS.Locator;

  #title: CodeceptJS.Locator;

  #shoppingCart: CodeceptJS.Locator;
  #shoppingCartBadge: CodeceptJS.Locator;

  constructor() {
    this.#menuContainer = this.#root.find('div#menu_button_container');
    this.#burgerButton = this.#menuContainer.find('button#react-burger-menu-btn');
    this.#burgerItems = this.#menuContainer.find('nav.bm-item-list > a');
    this.#burgerCloseButton = this.#menuContainer.find('button#react-burger-cross-btn');

    this.#title = this.#root.find('div.app_logo');

    this.#shoppingCart = this.#root.find('a.shopping_cart_link');
    this.#shoppingCartBadge = this.#shoppingCart.find('span.shopping_cart_badge');
  }

  get burgerButton() {
    return this.#burgerButton;
  }

  get burgerItems() {
    return this.#burgerItems;
  }

  get burgerCloseButton() {
    return this.#burgerCloseButton;
  }

  get title() {
    return this.#title;
  }

  get shoppingCart() {
    return this.#shoppingCart;
  }

  get shoppingCartBadge() {
    return this.#shoppingCartBadge;
  }

  isLoaded() {
    I.waitForVisible(this.burgerButton);
    I.see('Swag Labs', this.title)
    I.waitForVisible(this.shoppingCart);
  }

  clickItemWithLabels(label: string) {
    I.click(this.burgerButton);
    I.click(this.burgerItems.withText(label));
  }

  clickShoppingCart() {
    I.click(this.shoppingCart)
  }

  async grabNumberOfItemsInCart() {
    const isTrue = await tryTo(() => (I.seeElementInDOM(this.shoppingCartBadge)))
    return isTrue ? +(await I.grabTextFrom(this.shoppingCartBadge)) : 0;
  }
}

export = new HeaderPage();
