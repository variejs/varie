module.exports = function(config) {
  return {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      ...(!config.inProduction ? ["cache-loader"] : []),
      {
        loader: "babel-loader",
        options: {
          presets: ["babel-preset-env"],
        },
      },
    ],
  };
};
