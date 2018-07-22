const loadIf = require("~build/helpers/loadIf");

module.exports = function(config) {
  return loadIf(config.isProduction, [
    require("./plugins/uglify")(),
    require("./plugins/cssOptimization")(),
  ]);
};
