# CodeceptJS Framework for the new premium payment flow

This is the implementation of 'Part D: Test Execution' of the QA Engineer Home assignment. This testing framework using codeceptjs with playwright for automatically testing phases 1-4 a,b,c until the user press "pay". 

The persona created for this exercise has this credentials:
- Email: `cabelchior@hotmail.com`
- Password: `c@12345678`

## Specifications
- Node.js [v18.12.1]
- Typescript [5.2.2]
- CodeceptJS [3.5.4]
- Playwright [1.38.0]

## Get Started

- Install VS Code, Node.js and NVM
- Extract the .zip file into a given foder
- From within the extracted folder, run the following commands to install the dependencies:

```sh
 nvm use
 npm install
 npx playwright install
```

## Project structure

This project is organized as follows:

| Main folders         | Description |
|---                   |---          |
| `.`                  | Root folder where the configuration files are located |
| `./functional-tests` | Folder where the actual tests are located, as specified in `codecept.conf.ts` file |
| `./output`           | Folder where the artifacts and temporary files are located |
| `./pages`            | Folder where the Page Object Models are located  |
| `./utils`            | Folder where generic methods are located |

## Functional Test

To execute the functional tests run one of the the below command in root folder:

| CLI command                           | Description |
|---                                    |---          |
| `npm run test:desktop:chrome:wip`     | In order to isolate a run for a specific test, we should add the `@wip` tag in that particular test scenario |
| `npm run test:desktop:chrome`         | Run all test cases with the tag `@desktop` in the Chrome browser with a Desktop emulation |
| `npm run test:desktop:safari`         | Run all test in the Safari browser with a Desktop emulation |
| `npm run test:desktop:chrome:workers` | Run tests in parallel |

> **_NOTE_:** In order to isolate a run for a specific test, we should add the @wip tag in that particular test scenario.

## Challenges faced while working on the technical project
- Lack of `data-testid` in the website DOM
- Lack language consistency before and after the login phase
- Lack language consistency when open the website in an incognito window

These three points made choosing element locators harder.

## Additional test scenarios
- Web mobile version of the implemented test cases