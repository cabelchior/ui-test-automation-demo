# CodeceptJS Framework for UI automation testcases - https://www.saucedemo.com

In this project, I'll walk you through a sample project that demonstrates how to perform UI automation testing on Saucedemo - a sample website built by [SauceLabs®](https://saucelabs.com/) - using the CodeceptJS framework with Playwright helper.

## Specifications
- Node.js [v18.12.1]
- Typescript [5.2.2]
- CodeceptJS [3.5.4]
- Playwright [1.38.0]

## Get Started

- Install VS Code, Node.js and NVM
- Clone the project into a given foder
- From within the project folder, run the following commands to install the dependencies:

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
