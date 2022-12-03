const { baseConfig } = require("./cypress.config.base");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    baseUrl: "https://www.australiansuper.com/",
  },
  env: {
    baseApiUrl: "https://apis.australiansuper.com/",
    apiKey: "77d132b3-3e2c-4302-8307-4e295394be3b",
  },
});
