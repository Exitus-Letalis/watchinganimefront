const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Вказати базовий URL для ваших тестів
    baseUrl: "http://localhost:3000", // змініть на ваш локальний або тестовий сервер

    // Інші опції конфігурації
    setupNodeEvents(on, config) {
      // Місце для налаштування подій Node.js
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
