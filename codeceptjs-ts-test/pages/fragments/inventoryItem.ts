const I = actor();

export class InventoryItem {
  readonly #root: CodeceptJS.Locator;
  readonly name: CodeceptJS.Locator;
  readonly image: CodeceptJS.Locator;
  readonly description: CodeceptJS.Locator;
  readonly price: CodeceptJS.Locator;
  readonly addToCartButton: CodeceptJS.Locator;
  readonly removeFromCartButton: CodeceptJS.Locator;

  constructor(locator: CodeceptJS.Locator) {
    this.#root = locator;
    this.name = this.#root.find('div.inventory_item_name');
    this.image = this.#root.find('img.inventory_item_img');
    this.description = this.#root.find('div.inventory_item_desc');
    this.price = this.#root.find('div.inventory_item_price');
    this.addToCartButton = this.#root.find('button').withText('Add to cart');
    this.removeFromCartButton = this.#root.find('button').withText('Remove');
  }

  async grabImageSrc() {
    return await I.grabAttributeFrom(this.image, 'src');
  }

  seeAllRequiredElements() {
    I.seeElement(this.name);
    I.seeElement(this.image);
    I.seeElement(this.description);
    I.seeElement(this.price);
    I.seeElement(this.addToCartButton);
  }
}