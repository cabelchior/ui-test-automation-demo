const I = actor();
const tryTo = codeceptjs.container.plugins('tryTo');

class LoginPage {
  #root: CodeceptJS.Locator = locate('div.login_container');
  #usernameInput: CodeceptJS.Locator;
  #passwordInput: CodeceptJS.Locator;
  #submitInput: CodeceptJS.Locator;
  #errorMessage: CodeceptJS.Locator;

  constructor() { 
    this.#usernameInput = this.#root.find('input').withAttr({ placeholder: 'Username' });
    this.#passwordInput = this.#root.find('input').withAttr({ placeholder: 'Password' });
    this.#submitInput = this.#root.find('input').withAttr({ value: 'Login' });
    this.#errorMessage = this.#root.find('h3').withChild('button.error-button');
  }

  get root() {
    return this.#root;
  }

  get usernameInput() {
    return this.#usernameInput;
  }

  get passwordInput() {
    return this.#passwordInput;
  }

  get submitInput() {
    return this.#submitInput;
  }

  get errorMessage() {
    return this.#errorMessage;
  }

  goTo() {
    I.amOnPage('/');
    I.see('Swag Labs');
  }

  logIn(credentials: Credentials) {
    I.fillField(this.usernameInput, credentials.username);
    I.fillField(this.passwordInput, credentials.password);
    I.click(this.submitInput);
  }
  
  async isErrorMessageVisible() {
    return await tryTo(() => I.waitForVisible(this.errorMessage, 3));
  }

  async grabErrorMessage() {
    return await I.grabTextFrom(this.errorMessage);
  }
}

export = new LoginPage();
