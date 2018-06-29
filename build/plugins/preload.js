const PreloadWebpackPlugin = require("preload-webpack-plugin");

module.exports = function() {
  return new PreloadWebpackPlugin({
    fileBlacklist: [/\.map$/, /hot-update\.js$/],
  });
};
