module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [
        {
          "name": "Runtime + Compiler: recommended for most users",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "router": {
      "type": "confirm",
      "message": "Install vue-router?"
    },
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "Pick an ESLint preset",
      "choices": [
        {
          "name": "Standard (https://github.com/feross/standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "Airbnb (https://github.com/airbnb/javascript)",
          "value": "airbnb",
          "short": "Airbnb"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?"
    },
    "bootstrap": {
      "type": "confirm",
      "message": "Use the Vue-Bootstrap@4 library of UI components?"
    },
    "sass": {
      "type": "confirm",
      "message": "Enable Sass to pre-process Vue component styles?"
    },
    "vuex": {
      "type": "confirm",
      "message": "Use Vuex to manage application state?"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "build/webpack.test.conf.js": "unit",
    "config/test.env.js": "unit || e2e",
    "src/api/**/*": "vuex",
    "src/router/**/*": "router",
    "src/store/**/*": "vuex",
    "test/unit/**/*": "unit",
    "test/e2e/**/*": "e2e"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}yarn\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
