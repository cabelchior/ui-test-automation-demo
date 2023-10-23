Feature('@wip UI automation testcases - login page of saucedemo.com'); //, { retryBefore: 2 });

/*** Feature Global Variables ***/

const invalidUsername = new DataTable(['username', 'errorMessage']);
invalidUsername.add(['', 'Epic sadface: Username is required']);
invalidUsername.add(['invalid_user', 'Epic sadface: Username and password do not match any user in this service']);
invalidUsername.add([
  "'); DROP TABLE *;--",
  'Epic sadface: Username and password do not match any user in this service',
]);

const invalidPassword = new DataTable(['password', 'errorMessage']);
invalidPassword.add(['', 'Epic sadface: Password is required']);
invalidPassword.add(['invalid_pass', 'Epic sadface: Username and password do not match any user in this service']);
invalidPassword.add([
  "'); DROP TABLE *;--",
  'Epic sadface: Username and password do not match any user in this service',
]);

/*** Test Cases ***/

Scenario('The user logs in with a valid username/password @desktop', async ({ I, loginPage }) => {
  let credentials: Credentials = {
    username: 'standard_user',
    password: 'secret_sauce',
  };

  loginPage.goTo();
  loginPage.logIn(credentials);

  I.assertFalse(await loginPage.isErrorMessageVisible(), 'There is no visible error message after the login procedure');

  // pause();
});

Scenario('The user tries to logs in with locked out credentials @desktop', async ({ I, loginPage }) => {
  let credentials: Credentials = {
    username: 'locked_out_user',
    password: 'secret_sauce',
  };

  loginPage.goTo();
  loginPage.logIn(credentials);

  I.assertTrue(await loginPage.isErrorMessageVisible(), 'There is an error message after the login procedure');
  I.seeTextEquals('Epic sadface: Sorry, this user has been locked out.', loginPage.errorMessage);

  // pause();
});

Data(invalidUsername).Scenario(
  'The user tries to logs in with invalid username @desktop',
  async ({ I, loginPage, current }) => {
    let credentials: Credentials = {
      username: current.username,
      password: 'secret_sauce',
    };

    loginPage.goTo();
    loginPage.logIn(credentials);

    I.assertTrue(await loginPage.isErrorMessageVisible(), 'There is an error message after the login procedure');
    I.seeTextEquals(current.errorMessage, loginPage.errorMessage);

    // pause();
  },
);

Data(invalidPassword).Scenario(
  'The user tries to logs in with invalid password @desktop',
  async ({ I, loginPage, current }) => {
    let credentials: Credentials = {
      username: 'standard_user',
      password: current.password,
    };

    loginPage.goTo();
    loginPage.logIn(credentials);

    I.assertTrue(await loginPage.isErrorMessageVisible(), 'There is an error message after the login procedure');
    I.seeTextEquals(current.errorMessage, loginPage.errorMessage);

    // pause();
  },
);
