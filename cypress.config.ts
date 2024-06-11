const createBuilder = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuilderPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
import { defineConfig } from "cypress";

export default defineConfig({
  scrollBehavior: "center",
  chromeWebSecurity: false,
  pageLoadTimeout: 100000,
  e2e: {
    async setupNodeEvents(on: any, config: any) {
      const builder = createBuilder({
        plugins: [createEsBuilderPlugin(config)],
      });
      on("file:preprocessor", builder);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    env: {
      baseUrl: "https://www.dummyticket.com",
    },
  },

  watchForFileChanges: false,
});
