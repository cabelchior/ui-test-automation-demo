/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type LoginPage = typeof import('./pages/loginPage');
type HeaderPage = typeof import('./pages/headerPage');
type ProductListPage = typeof import('./pages/productListPage');
type ProductDetailPage = typeof import('./pages/productDetailPage');
type CartPage = typeof import('./pages/cartPage');
type CheckoutInfoPage = typeof import('./pages/checkoutInfoPage');
type CheckoutOverviewPage = typeof import('./pages/checkoutOverviewPage');
type CheckoutCompletePage = typeof import('./pages/checkoutCompletePage');
type ChaiWrapper = import('codeceptjs-chai');
type CustomHelper = import('./helpers/CustomHelper');
type A11yHelper = import('codeceptjs-a11y-helper');

declare namespace CodeceptJS {
  interface SupportObject { 
    I: I, 
    current: any, 
    loginPage: LoginPage, 
    headerPage: HeaderPage, 
    productListPage: ProductListPage, 
    productDetailPage: ProductDetailPage, 
    cartPage: CartPage, 
    checkoutInfoPage: CheckoutInfoPage, 
    checkoutOverviewPage: CheckoutOverviewPage, 
    checkoutCompletePage: CheckoutCompletePage 
  }
  interface Methods extends Playwright, REST, JSONResponse, ChaiWrapper, CustomHelper, A11yHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
