module.exports = function jsLoader() {
  return {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["babel-preset-env"],
      },
    },
  };
};
