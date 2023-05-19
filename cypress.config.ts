import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 720,
  viewportWidth: 1300,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
