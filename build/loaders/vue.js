const loadIf = require("./../helpers/loadIf");

module.exports = function(config) {
  return {
    test: /\.vue$/,
    use: [...loadIf(!config.isProduction, ["cache-loader"]), "vue-loader"],
  };
};
