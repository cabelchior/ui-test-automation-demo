const I = actor();
const tryTo = codeceptjs.container.plugins('tryTo');

class HeaderPage {
  readonly #root: CodeceptJS.Locator = locate('div.header_container > div.primary_header');
  readonly #menuContainer: CodeceptJS.Locator;
  readonly burgerButton: CodeceptJS.Locator;
  readonly burgerItems: CodeceptJS.Locator;
  readonly burgerCloseButton: CodeceptJS.Locator;
  readonly title: CodeceptJS.Locator;
  readonly shoppingCart: CodeceptJS.Locator;
  readonly shoppingCartBadge: CodeceptJS.Locator;

  constructor() {
    this.#menuContainer = this.#root.find('div#menu_button_container');
    this.burgerButton = this.#menuContainer.find('button#react-burger-menu-btn');
    this.burgerItems = this.#menuContainer.find('nav.bm-item-list > a');
    this.burgerCloseButton = this.#menuContainer.find('button#react-burger-cross-btn');
    this.title = this.#root.find('div.app_logo');
    this.shoppingCart = this.#root.find('a.shopping_cart_link');
    this.shoppingCartBadge = this.shoppingCart.find('span.shopping_cart_badge');
  }

  isLoaded() {
    I.seeElement(this.burgerButton);
    I.see('Swag Labs', this.title)
    I.seeElement(this.shoppingCart);
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
