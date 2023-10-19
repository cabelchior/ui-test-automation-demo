/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type ChaiWrapper = import('codeceptjs-chai');
type CustomHelper = import('./helpers/CustomHelper');
type LoginPage = typeof import('./pages/loginPage');
type HeaderPage = typeof import('./pages/headerPage');
type ProductListPage = typeof import('./pages/productListPage');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
    loginPage: LoginPage;
    headerPage: HeaderPage;
    productListPage: ProductListPage;
  }

  interface Methods extends Playwright, JSONResponse, REST, ChaiWrapper, CustomHelper {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface I extends WithTranslation<Methods> {}

  namespace Translation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Actions {}
  }
}
