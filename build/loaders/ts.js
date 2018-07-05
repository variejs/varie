module.exports = function(config) {
  return {
    test: /\.tsx?$/,
    use: [
      ...(!config.isProduction ? ["cache-loader"] : []),
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
