module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  extends: [
    "plugin:vue/essential",
    "@vue/prettier",
    "@vue/typescript",
    "eslint:recommended",
  ],

  rules: {
    "no-console": "warn",
    "no-debugger": "warn",
  },

  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
