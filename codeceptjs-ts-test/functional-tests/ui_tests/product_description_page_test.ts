Feature('UI automation testcases - product description page of saucedemo.com'); //, { retryBefore: 2 });

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
  productListPage.clickItemAtIndex(1);

});

Scenario.todo('User adds/removes items from cart @desktop', async ({ I }) => {
  pause();
});

Scenario.todo('User navigates back to PLP @desktop', async ({ I }) => {
  pause();
});
