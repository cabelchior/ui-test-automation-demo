Feature('Accessibility test on multiple pages'); //, { retryBefore: 2 });

/*** Feature Global Variables ***/

/*** Test Cases ***/

Before(({ I }) => {
  // do something...
});

Scenario('@wip Perform a11y check against the Login page @a11y', async ({ I, loginPage }) => {
  loginPage.goTo();
  await I.runA11yCheck({ 
    outputDir: 'output/loginPage', 
  });

  // pause();
});

Scenario('@wip Perform a11y check against the Product List page @a11y', async ({ I, loginPage }) => {
  let credentials: Credentials = {
    username: 'standard_user',
    password: 'secret_sauce',
  };

  loginPage.goTo();
  loginPage.logIn(credentials);
  await I.runA11yCheck({ 
    outputDir: 'output/productListPage', 
  });

  // pause();
});
