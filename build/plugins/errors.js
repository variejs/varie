let FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = function errorPlugin() {
  return new FriendlyErrorsWebpackPlugin({
    clearConsole: true,
  });
};
