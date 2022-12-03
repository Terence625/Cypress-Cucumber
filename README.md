# Cypress-Cucumber
[![Cypress Tests](https://github.com/Terence625/Cypress-Cucumber/actions/workflows/main.yml/badge.svg)](https://github.com/Terence625/Cypress-Cucumber/actions/workflows/main.yml)
[![pages-build-deployment](https://github.com/Terence625/Cypress-Cucumber/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Terence625/Cypress-Cucumber/actions/workflows/pages/pages-build-deployment)

Cypress e2e test for australianSuper combine my super feature with BDD cucumber implementation
## Dependencies
List of dependencies required to execute this boilerplate performance test
* Visual Studio Code for IDE
  * Cucumber support for Visual Studio Code to allow: https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete
* NodeJS
## Getting started
To get started, simply follow these simple steps to execute / modify the scripts:
### 1. Install node pacakges
Open command line and navigate to the Boilerplate Cypress script folder, and run the following command:
``` ms-dos
yarn
```
This will install all required dependencies as described in package.json
### 2. Start local environment
Make sure local environment is running
### 3. Run the test
You can run the test in headless chrome mode
``` ms-dos
yarn cy:run
```
After the test is finished, a report will be generated under ```public``` folder : ```index.html```. This is for the deployment to github-page

You can run the test in GUI mode
``` ms-dos
yarn cy:open
```
## Folder structure
After cloning this repository this is the file structure :
```
├── cypress
|  ├── config
|  ├── fixtures
|  ├── e2e
|  ├── models
|  ├── snapshots
|  ├── support
|  └── utils
├── package.json
(https://www.npmjs.com/package/tree-cli can be used to generate this)
```
* **config** Folder - This folder contains the configuration files.
* **fixtures** Folder - This folder contains the json files like requestBody for cy.request; staticResponse for mock api, testData for automation tests.
* **e2e** Folder - This folder contains the main scripts, both .feature file (for tests written in BDD format) as well as the step definition.
* **models** Folder - This folder contains the page models which contain the page elements and action functions
* **snapshots** Folder - This folder contains the snapshots that are token during the test
* **support** Folder - This folder contains the cypress custom command file and plugin command file
* **utils** Folder - This folder contains some reuseful function files
* **cypress.config.js** File - This file contains all the cypress configurations

## Key features
### 1. Cucumber integration:
Use the following two dependencies to implement cucumber into cypress, please refer to https://github.com/badeball/cypress-cucumber-preprocessor.git for more details:
``` ms-dos
"devDependencies": {
  "@badeball/cypress-cucumber-preprocessor": "^14.0.0",
  "@bahmutov/cypress-esbuild-preprocessor": "2.1.5",
}
```
### 2. Visual test:
For cypress visual test, can refer to their official documentation: https://docs.cypress.io/guides/tooling/visual-testing for overall explanation.
Here, we used one third-party plugin: https://github.com/simonsmith/cypress-image-snapshot.git
``` ms-dos
"devDependencies": {
  @simonsmith/cypress-image-snapshot,
}
```
Some configuration for screenshots comparison in /support/e2e.js file:
``` ms-dos
addMatchImageSnapshotCommand({
  comparisonMethod: "ssim",
  //bezkrovny will downsample the image and perform fast (default), 
  //to compare with a higher accuracy, change it to { ssim: "fast" }
  customDiffConfig: { ssim: "bezkrovny" },
  failureThreshold: 0.01,
  failureThresholdType: "percent",
});
```
Here, we use structural similarity index measure (SSIM) for image diff and set the failure threshold as 1%.
### 3. Report:
After cypress run is finished, a report will be generated under public folder : index.html. This html is hosted by github page:https://terence625.github.io/Cypress-Cucumber/

The report will capture failed steps with screenshots and screenshots from visual test. An example will be as follow:
![image](https://user-images.githubusercontent.com/46805148/205429921-a0c03254-2f17-4c47-8c22-ef998354e13e.png)
