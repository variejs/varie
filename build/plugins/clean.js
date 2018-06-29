const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = function(config) {
  return new CleanWebpackPlugin([config.outputPath], {
    root: config.root,
  });
};
