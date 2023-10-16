export const showBrowser = process.env.SHOW === 'true';
export const baseUrl = setUrl(process.env.ENV);

// process.env.HOSTNAME have the priority over process.env.ENV
function setUrl(environment?: string) {
  let url: string;

  switch (environment) {
    case 'PROD':
      url = 'https://www.saucedemo.com';
      break;
    default:
      url = 'http://localhost:3000';
  }

  return process.env.HOSTNAME === undefined ? url : process.env.HOSTNAME;
}