const I = actor();

class ProductDetailHeader {
  #root: CodeceptJS.Locator = locate('div.header_container > div.header_secondary_container');
  readonly backButton: CodeceptJS.Locator;

  constructor() {
    this.backButton = this.#root.find('button').withText('Back to products');
  }
}

class ProductDetailPage {
  readonly root: CodeceptJS.Locator = locate('div#contents_wrapper > div.inventory_item_container');
  readonly name: CodeceptJS.Locator;
  readonly image: CodeceptJS.Locator;
  readonly description: CodeceptJS.Locator;
  readonly price: CodeceptJS.Locator;
  readonly addToCartButton: CodeceptJS.Locator;
  readonly removeFromCartButton: CodeceptJS.Locator;
  readonly productDetailHeader: ProductDetailHeader;

  constructor() {
    this.name = this.root.find('div.inventory_details_name');
    this.image = this.root.find('img.inventory_details_img');
    this.description = this.root.find('div.inventory_details_desc');
    this.price = this.root.find('div.inventory_details_price');
    this.addToCartButton = this.root.find('button').withText('Add to cart');
    this.removeFromCartButton = this.root.find('button').withText('Remove');
    this.productDetailHeader = new ProductDetailHeader();
  }

  isLoaded() {
    I.seeElementInDOM(this.root);
    I.see('Back to products');
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

  async grabProductInfo() {
    let productInfo: ProductInfo = {
      name: await I.grabTextFrom(this.name),
      imageSrc: await this.grabImageSrc(),
      description: await I.grabTextFrom(this.description),
      price: await I.grabTextFrom(this.price),
    };

    return productInfo;
  }

  clickBackToProducts() {
    I.click(this.productDetailHeader.backButton);
  }

  clickAddToCart() {
    I.click(this.addToCartButton);
  }

  clickRemoveFromCart() {
    I.click(this.removeFromCartButton);
  }
}

export = new ProductDetailPage();
