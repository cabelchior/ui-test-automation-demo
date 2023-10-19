Feature('UI automation testcases - product listing page of saucedemo.com'); //, { retryBefore: 2 });

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


Scenario.todo('The PLP has all the requided sections @desktop', async ({ I, productListPage }) => {
  productListPage.isLoaded();
});

Scenario.todo("User sorts the PLP's products in alphabetical order @desktop", async ({ I, productListPage }) => {
  productListPage.isLoaded();
  productListPage.sortItemsBy('Name (A to Z)');
  pause()
});

Scenario.todo("User sorts the PLP's products in reverse alphabetical order @desktop", async ({ I, productListPage }) => {
  productListPage.isLoaded();
  productListPage.sortItemsBy('Name (Z to A)');
  pause()
});

Scenario("@wip User sorts the PLP's products by price in ascending order @desktop", async ({ I, productListPage }) => {
  productListPage.isLoaded();
  productListPage.sortItemsBy('Price (low to high)');
  pause()
});

Scenario.todo("User sorts the PLP's products by price in descending order @desktop", async ({ I, productListPage }) => {
  productListPage.isLoaded();
  productListPage.sortItemsBy('Price (high to low)');
  pause()
});

Scenario.todo('User adds/removes items from cart @desktop', async ({ I, productListPage }) => {
  productListPage.isLoaded();
});

Scenario("Verify that each product's image link is not broken @desktop", async ({ I, productListPage }) => {

  productListPage.isLoaded();

  const itemCount = await productListPage.grabNumberOfItems();

  for (let i = 1; i <= itemCount; i++) {
    const item = productListPage.grabItemAtIndex(i);
    const imgSrc = await item.grabImageSrc();

    const response = await I.sendGetRequest(imgSrc)
    I.seeResponseCodeIs(200);
    I.assertEqual(response.headers['content-type'],'image/jpeg')
  }

  // pause()
});


/**
 * Test to ensure that the PLP product link properly redirects to the associated PDP.
 * Check that the PLP prices match the PDP prices.
 */
