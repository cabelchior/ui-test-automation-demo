import { devices } from 'playwright';
import { showBrowser, baseUrl } from './utils/config_constants';
import { browserType, setBrowser, setEmulator } from './utils/profile';

export const config: CodeceptJS.MainConfig = {
  tests: './functional-tests/**/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: setBrowser as browserType,
      emulate: devices[setEmulator],
      show: showBrowser,
      url: baseUrl,
      waitForAction: 500,
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai',
    },
    CustomHelper: {
      require: './helpers/CustomHelper.ts',
    },
  },
  include: {
    I: './steps_file',
    loginPage: './pages/loginPage.ts',
    headerPage: './pages/headerPage.ts',
    productListPage: './pages/productListPage.ts',
  },
  name: 'codeceptjs-ts-test',
  plugins: {
    autoDelay: {
      enabled: true,
      delayAfter: 500,
    },
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
