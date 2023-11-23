const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
   // watchForFileChanges: false,
    chromeWebSecurity: true,
    //"cypress_": true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      
      // "waitForAnimations": true,

      
    },
  },
});
