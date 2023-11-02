/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type loginPage = typeof import('./pages/loginPage');
type headerPage = typeof import('./pages/headerPage');
type productListPage = typeof import('./pages/productListPage');
type productDetailPage = typeof import('./pages/productDetailPage');
type cartPage = typeof import('./pages/cartPage');
type checkoutInfoPage = typeof import('./pages/checkoutInfoPage');
type checkoutOverviewPage = typeof import('./pages/checkoutOverviewPage');
type checkoutCompletePage = typeof import('./pages/checkoutCompletePage');
type ChaiWrapper = import('codeceptjs-chai');
type CustomHelper = import('./helpers/CustomHelper');
type A11yHelper = import('codeceptjs-a11y-helper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, headerPage: headerPage, productListPage: productListPage, productDetailPage: productDetailPage, cartPage: cartPage, checkoutInfoPage: checkoutInfoPage, checkoutOverviewPage: checkoutOverviewPage, checkoutCompletePage: checkoutCompletePage }
  interface Methods extends Playwright, REST, JSONResponse, ChaiWrapper, CustomHelper, A11yHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
