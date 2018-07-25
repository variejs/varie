let BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = function(config) {
  return new BrowserSyncPlugin(
    {
      open: config.host ? "external" : "local",
      host: config.host,
      proxy: config.isHot ? "http://localhost:8080/" : config.host,
      files: [config.outputPath + "/**/*.js", config.outputPath + "**/*.css"],
    },
    { reload: false },
  );
};
