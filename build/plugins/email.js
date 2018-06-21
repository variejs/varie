const fs = require("fs");
const juice = require("juice");
const path = require("path");

const pluginName = "juiceWebpackPlugin";

class JuiceWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    let files = [];
    compiler.hooks.run.tap(pluginName, compilation => {
      files = fs
        .readdirSync(this.options.email_directory)
        .map(file => `${this.options.email_directory}/${file}`)
        .filter(file => !fs.lstatSync(file).isDirectory());

      files.forEach(file => {
        juice.juiceFile(
          file,
          {
            webResources: {
              relativeTo: "email"
            }
          },
          (error, html) => {
            if (!error) {
              compilation.assets[file] = {
                source: function() {
                  return html;
                },
                size: function() {
                  return html.length;
                }
              };
            } else {
              // ?
            }
          }
        );
      });
    });

    compiler.hooks.emit.tap(pluginName, compilation => {
      files.forEach(file => {
        compilation.fileDependencies.push(path.join(compiler.context, file));
      });
    });
  }
}

module.exports = function emailPlugin(context) {
  return new JuiceWebpackPlugin({
    email_directory: path.join(context.root, "email")
  });
};
