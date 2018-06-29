module.exports = function(config) {
  if (config.isProduction) {
    return [
      require("./plugins/uglify")(),
      require("./plugins/cssOptimization")(),
    ];
  }
  return [];
};
