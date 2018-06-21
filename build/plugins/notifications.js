const path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = function notificationsPlugin(context) {
  return new WebpackNotifierPlugin({
    title: context.appName, // TODO
    alwaysNotify: true,
  });
};
