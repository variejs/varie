const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = function(config) {
  return new WebpackNotifierPlugin({
    title: config.appName,
    alwaysNotify: true,
  });
};
