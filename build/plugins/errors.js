let FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = function() {
  return new FriendlyErrorsWebpackPlugin({
    clearConsole: true,
  });
};
