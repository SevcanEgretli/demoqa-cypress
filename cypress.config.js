const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 120000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
    reportDir: 'cypress/reports',
  },
  screenshotsFolder: 'cypress/screenshots',
  e2e: {
    baseUrl: 'https://demoqa.com',
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    async setupNodeEvents(on, config) {
      await addCucumberPlugin(on, config);
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config;
    },
  },
});
