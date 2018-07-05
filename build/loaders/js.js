module.exports = function(config) {
  return {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      ...(!config.isProduction ? ["cache-loader"] : []),
      {
        loader: "babel-loader",
      },
    ],
  };
};
