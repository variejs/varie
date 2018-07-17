const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = function(config) {
  if (!config.isHot) {
    return [
      new CleanWebpackPlugin([config.outputPath], {
        root: config.root,
      }),
    ];
  }
  return [];
};
