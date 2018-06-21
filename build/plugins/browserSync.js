let BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = function browserSync(context) {
  return new BrowserSyncPlugin({
      open: "external",
      host: "varie.test",
      proxy: "varie.test",
      files: ["public/**/*.js", "public/**/*.css"]
  });
};
