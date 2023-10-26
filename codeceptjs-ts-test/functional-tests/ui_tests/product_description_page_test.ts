Feature('Product description page'); //, { retryBefore: 2 });

/*** Feature Global Variables ***/

/*** Test Cases ***/

Before(({ I, loginPage, productListPage }) => {
  let credentials: Credentials = {
    username: 'standard_user',
    password: 'secret_sauce',
  };

  loginPage.goTo();
  loginPage.logIn(credentials);

  productListPage.isLoaded();
});

Scenario('At PDP, user adds/removes items from cart @desktop', async ({ I, headerPage, productListPage, productDetailPage }) => {
  productListPage.clickItemAtIndex(1);

  productDetailPage.isLoaded()
  I.assertEqual(await headerPage.grabNumberOfItemsInCart(), 0, 'There are NO products in the shopping cart');
  productDetailPage.clickAddToCart();
  I.assertEqual(await headerPage.grabNumberOfItemsInCart(), 1, 'There in ONE product in the shopping cart');
  productDetailPage.clickRemoveFromCart();
  I.assertEqual(await headerPage.grabNumberOfItemsInCart(), 0, 'There are NO products in the shopping cart');

  // pause();
});

Scenario('User navigates from PDP back to PLP @desktop', async ({ productListPage, productDetailPage }) => {
  productListPage.clickItemAtIndex(1);

  productDetailPage.isLoaded()
  productDetailPage.clickBackToProducts();
  
  productListPage.isLoaded();

  // pause();
});

Scenario("The info in PDP for each product corresponds to the info in PLP @desktop", async ({ I, productListPage, productDetailPage }) => {
  const itemCount = await productListPage.grabNumberOfItems();
  for (let i = 1; i < itemCount; i++) {
    const productInfoPlp = await productListPage.grabProductInfoAtIndex(i);
    productListPage.clickItemAtIndex(i);
    const productInfoPdp = await productDetailPage.grabProductInfo();

    I.assertDeepEqual(productInfoPlp, productInfoPdp);

    productDetailPage.clickBackToProducts();
  }

  // pause();
});
