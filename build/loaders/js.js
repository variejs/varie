const loadIf = require("./../helpers/loadIf");

module.exports = function(config) {
  return {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      ...loadIf(!config.isProduction, ["cache-loader"]),
      {
        loader: "babel-loader",
      },
    ],
  };
};
