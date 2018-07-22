let FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = function(config) {
  return new FriendlyErrorsWebpackPlugin({
    clearConsole: true,
  });
};
