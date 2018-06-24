let BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = function browserSync(config) {
  return new BrowserSyncPlugin({
    open: "external",
    host: config.host,
    proxy: config.host,
    files: [config.outputPath + "/**/*.js", config.outputPath + "**/*.css"],
    snippetOptions: {
      rule: {
        match: /(<\/body>|<\/pre>)/i,
        fn: function(snippet, match) {
          return snippet + match;
        },
      },
    },
  });
};
