Feature('Accessibility test on multiple pages'); //, { retryBefore: 2 });

/*** Feature Global Variables ***/
const credentials: Credentials = {
  username: 'standard_user',
  password: 'secret_sauce',
};

/*** Test Cases ***/

Before(({ I }) => {
  // do something...
});

Scenario('Perform a11y check against the Login page @a11y', async ({ I, loginPage }) => {
  loginPage.goTo();

  await I.runA11yCheck({
    outputDir: 'output/loginPage',
  });

  // pause();
});

Scenario('Perform a11y check against the Product List page @a11y', async ({ I, loginPage }) => {
  loginPage.goTo();
  loginPage.logIn(credentials);
  
  await I.runA11yCheck({
    outputDir: 'output/productListPage',
  });

  // pause();
});

Scenario('Perform a11y check against the Product Description page @a11y', async ({ I, loginPage, productListPage }) => {
  loginPage.goTo();
  loginPage.logIn(credentials);
  productListPage.clickItemAtIndex(1);

  await I.runA11yCheck({
    outputDir: 'output/productDescriptionPage',
  });

  // pause();
});