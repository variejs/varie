const path = require("path");
let BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = function browserSync(context) {
  return new BrowserSyncPlugin(
    {
      open: "local",
      host: "localhost",
      port: 3000,
      proxy: "localdev" + context.baseHref,
      files: [
        path.join(context.root, "dist/**/*.js"),
        path.join(context.root, "dist/**/*.css")
      ],
      snippetOptions: {
        rule: {
          match: /(<\/body>|<\/pre>)/i,
          fn: function(snippet, match) {
            return snippet + match;
          }
        }
      }
    },
    {
      reload: false
    }
  );
};
