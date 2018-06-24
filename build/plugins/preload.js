const PreloadWebpackPlugin = require("preload-webpack-plugin");

module.exports = function preloadPlugin() {
  return new PreloadWebpackPlugin({
    fileBlacklist: [/\.map$/, /hot-update\.js$/],
  });
};
