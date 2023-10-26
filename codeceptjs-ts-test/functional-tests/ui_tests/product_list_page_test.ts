Feature('Product listing page'); //, { retryBefore: 2 });

/*** Feature Global Variables ***/

/*** Test Cases ***/

Before(({ I, loginPage }) => {
  let credentials: Credentials = {
    username: 'standard_user',
    password: 'secret_sauce',
  };

  loginPage.goTo();
  loginPage.logIn(credentials);
});

Scenario('The PLP has all the requided sections @desktop', async ({ I, productListPage }) => {
  productListPage.isLoaded();

  I.waitForVisible(productListPage.productListHeader.select);

  const itemCount = await productListPage.grabNumberOfItems();
  for (let i = 1; i < itemCount; i++) {
    const item = productListPage.grabItemAtIndex(i);
    item.seeAllRequiredElements();
  }

  // pause()
});

Scenario("User sorts the PLP's products in alphabetical order @desktop", async ({ I, productListPage }) => {
  productListPage.isLoaded();
  productListPage.sortItemsBy('Name (A to Z)');

  const itemCount = await productListPage.grabNumberOfItems();

  for (let i = 1; i < itemCount; i++) {
    const itemName0 = await productListPage.grabItemNameAtIndex(i);
    const itemName1 = await productListPage.grabItemNameAtIndex(i + 1);

    const compare = itemName0 <= itemName1 ? true : false;
    I.assertTrue(compare, `The products [${itemName0}] and [${itemName1}] are in alphabetical order`);
  }

  // pause()
});

Scenario("User sorts the PLP's products in reverse alphabetical order @desktop", async ({ I, productListPage }) => {
  productListPage.isLoaded();
  productListPage.sortItemsBy('Name (Z to A)');

  const itemCount = await productListPage.grabNumberOfItems();

  for (let i = 1; i < itemCount; i++) {
    const itemName0 = await productListPage.grabItemNameAtIndex(i);
    const itemName1 = await productListPage.grabItemNameAtIndex(i + 1);

    const compare = itemName0 >= itemName1 ? true : false;
    I.assertTrue(compare, `The products [${itemName0}] and [${itemName1}] are in reverse alphabetical order`);
  }

  // pause()
});

Scenario("User sorts the PLP's products by price in ascending order @desktop", async ({ I, productListPage }) => {
  productListPage.isLoaded();
  productListPage.sortItemsBy('Price (low to high)');

  const itemCount = await productListPage.grabNumberOfItems();

  for (let i = 1; i < itemCount; i++) {
    const itemPrice0 = await productListPage.grabItemPriceAtIndex(i);
    const itemPrice1 = await productListPage.grabItemPriceAtIndex(i + 1);

    const compare = itemPrice0 <= itemPrice1 ? true : false;
    I.assertTrue(compare, `The prices [${itemPrice0}] and [${itemPrice1}] are in ascending order`);
  }

  // pause()
});

Scenario("User sorts the PLP's products by price in descending order @desktop", async ({ I, productListPage }) => {
  productListPage.isLoaded();
  productListPage.sortItemsBy('Price (high to low)');

  const itemCount = await productListPage.grabNumberOfItems();

  for (let i = 1; i < itemCount; i++) {
    const itemPrice0 = await productListPage.grabItemPriceAtIndex(i);
    const itemPrice1 = await productListPage.grabItemPriceAtIndex(i + 1);

    const compare = itemPrice0 >= itemPrice1 ? true : false;
    I.assertTrue(compare, `The prices [${itemPrice0}] and [${itemPrice1}] are in descending order`);
  }

  // pause()
});

Scenario('At PLP, user adds/removes items from cart @desktop', async ({ I, headerPage, productListPage }) => {
  headerPage.isLoaded();
  productListPage.isLoaded();

  const itemCount = await productListPage.grabNumberOfItems();

  for (let i = 1; i < itemCount; i++) {
    I.assertEqual(await headerPage.grabNumberOfItemsInCart(), 0, 'There are NO products in the shopping cart');
    productListPage.clickAddToCartAtIndex(i);
    I.assertEqual(await headerPage.grabNumberOfItemsInCart(), 1, 'There in ONE product in the shopping cart');
    productListPage.clickRemoveFromCartAtIndex(i);
    I.assertEqual(await headerPage.grabNumberOfItemsInCart(), 0, 'There are NO products in the shopping cart');
  }

  // pause();
});

Scenario("Verify that each product's image link is not broken @desktop", async ({ I, productListPage }) => {
  productListPage.isLoaded();

  const itemCount = await productListPage.grabNumberOfItems();

  for (let i = 1; i <= itemCount; i++) {
    const item = productListPage.grabItemAtIndex(i);
    const imgSrc = await item.grabImageSrc();

    const response = await I.sendGetRequest(imgSrc);
    I.seeResponseCodeIs(200);
    I.assertEqual(response.headers['content-type'], 'image/jpeg');
  }

  // pause()
});
