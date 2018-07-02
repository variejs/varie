module.exports = function(config) {
  return {
    test: /\.tsx?$/,
    use: [
      ...(!config.inProduction ? ["cache-loader"] : []),
      {
        loader: "babel-loader",
        options: {
          presets: ["babel-preset-env"],
        },
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
