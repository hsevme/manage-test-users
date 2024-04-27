import * as website from "@fixtures/websites.json";
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: website.baseUrl,
    viewportWidth: 1500,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
