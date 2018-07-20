let FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = function(config) {
  if (!config.isProduction) {
    return [
      new FriendlyErrorsWebpackPlugin({
        clearConsole: true,
      }),
    ];
  }
  return [];
};
