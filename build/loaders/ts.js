module.exports = function tsLoader() {
  return {
    test: /\.tsx?$/,
    use: [
      "cache-loader",
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
