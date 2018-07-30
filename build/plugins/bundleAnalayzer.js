const getDependency = require("./../helpers/getDependency");
module.exports = function(config) {
  return new (getDependency("webpack-bundle-analyzer")).BundleAnalyzerPlugin();
};
