let BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = function(config) {
  return new BrowserSyncPlugin(
    {
      open: "external",
      host: config.host,
      proxy: config.hmr ? "http://localhost:8080/" : config.host,
      files: [config.outputPath + "/**/*.js", config.outputPath + "**/*.css"],
    },
    { reload: false },
  );
};
