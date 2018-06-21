const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = function notificationsPlugin(config) {
  return new WebpackNotifierPlugin({
    title: config.appName,
    alwaysNotify: true,
  });
};
