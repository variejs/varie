let BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = function(config) {
  if (!config.isProduction) {
    return [
      new BrowserSyncPlugin(
        {
          open: "external",
          host: config.host,
          proxy: config.isHot ? "http://localhost:8080/" : config.host,
          files: [
            config.outputPath + "/**/*.js",
            config.outputPath + "**/*.css",
          ],
        },
        { reload: false },
      ),
    ];
  }
  return [];
};
