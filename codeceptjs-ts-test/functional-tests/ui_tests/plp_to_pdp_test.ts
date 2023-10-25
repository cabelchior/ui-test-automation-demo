Feature('UI automation testcases - PLP to PDP of saucedemo.com'); //, { retryBefore: 2 });

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

Scenario.todo('Verify that each product link properly redirects to its associated PDP @desktop', async ({ I }) => {
  pause();
});

Scenario.todo("Verify that each product's PLP price matches its PDP price @desktop", async ({ I }) => {
  pause();
});

Scenario.todo("Verify that each product's PLP image matches its PDP image @desktop", async ({ I }) => {
  pause();
});

Scenario.todo("Verify that each product's PLP description matches its PDP description @desktop", async ({ I }) => {
  pause();
});
