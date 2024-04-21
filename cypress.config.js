const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.WIKIPEDIA_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});