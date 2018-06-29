module.exports = function(config) {
  if (config.isProduction) {
    return [
      require("./build/plugins/uglify")(),
      require("./build/plugins/cssOptimization")(),
    ];
  }
  return [];
};
