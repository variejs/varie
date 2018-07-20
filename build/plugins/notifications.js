const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = function(config) {
  if (!config.isProduction) {
    return [
      new WebpackNotifierPlugin({
        title: config.appName,
        alwaysNotify: false,
        skipFirstNotification: true,
      }),
    ];
  }
  return [];
};
