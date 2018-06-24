const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = function cleanPlugin(config) {
  return new CleanWebpackPlugin([config.outputPath], {
    root: config.root,
  });
};
