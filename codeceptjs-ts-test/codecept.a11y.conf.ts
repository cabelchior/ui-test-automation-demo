import { devices } from 'playwright';
import { showBrowser, baseUrl } from './utils/config_constants';
import { browserType, setBrowser, setEmulator } from './utils/profile';

export const config: CodeceptJS.MainConfig = {
  tests: './a11y-tests/*_test.ts',
  output: './output',
  grep: '@a11y',
  helpers: {
    Playwright: {
      browser: setBrowser as browserType,
      emulate: devices[setEmulator],
      show: showBrowser,
      url: baseUrl,
      // waitForAction: 500,
      // restart: 'keep',         // in windowed mode.
      // keepBrowserState: false, // in windowed mode.
      // keepCookies: false,      // in windowed mode.
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai',
    },
    CustomHelper: {
      require: './helpers/CustomHelper.ts',
    },
    A11yHelper: {
      require: 'codeceptjs-a11y-helper',
      detailedReportOptions: { html: true }, 
      skipFailures: showBrowser, // If you pass skipFailures=false, test would fail if violations found and there is no HTML report generated.
    },
  },
  include: {
    I: './steps_file',
    loginPage: './pages/loginPage.ts',
    headerPage: './pages/headerPage.ts',
    productListPage: './pages/productListPage.ts',
    productDetailPage: './pages/productDetailPage.ts',
    cartPage: './pages/cartPage.ts',
    checkoutInfoPage: './pages/checkoutInfoPage.ts',
    checkoutOverviewPage: './pages/checkoutOverviewPage.ts',
    checkoutCompletePage: './pages/checkoutCompletePage.ts',
  },
  name: 'codeceptjs-ts-test',
  plugins: {
    // autoDelay: {
    //   enabled: true,
    //   delayAfter: 500,
    // },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
      fullPageScreenshots: true,
    },
    // pauseOnFail: {
    //   enabled: true,
    // },
  },
};
