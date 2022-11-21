const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const fs = require("fs-extra");
const path = require("path");
const {
  addMatchImageSnapshotPlugin,
  matchImageSnapshotPlugin,
} = require("@simonsmith/cypress-image-snapshot/plugin");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress/config", `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      const file = config.env.configFile || "test";
      addMatchImageSnapshotPlugin(on, config);
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await preprocessor.addCucumberPreprocessorPlugin(on, config, {
        omitAfterScreenshotHandler: true,
      });

      on("after:screenshot", async (details) => {
        const pathObj = matchImageSnapshotPlugin({ path: details.path });
        if (pathObj) details = { ...details, path: pathObj.path };
        const newDetails = await preprocessor.afterScreenshotHandler(config, details);
        return newDetails;
      });

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        }),
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return getConfigurationByFile(file).then((customConfig) => {
        return {
          ...config,
          ...customConfig,
          env: {
            ...config.env,
            ...customConfig.env,
          },
        };
      });
    },
  },
  component: {
    framework: "react",
    bundler: "webpack",
    webpackConfig: require("../webpack.config"),
  },
  viewportWidth: 1200,
  viewportHeight: 800,
  video: false,
  responseTimeout: 60000,
});