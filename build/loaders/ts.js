const loadIf = require("./../helpers/loadIf");

module.exports = function(config) {
  return {
    test: /\.tsx?$/,
    use: [
      ...loadIf(!config.isProduction, ["cache-loader"]),
      {
        loader: "babel-loader",
      },
      {
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
    ],
    exclude: /node_modules/,
  };
};
