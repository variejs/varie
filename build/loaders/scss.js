const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = function scssLoader(config) {
  return {
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: !config.isProduction,
          minimize: config.isProduction,
          importLoaders: 1,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          autoprefixer: {
            browsers: ["last 2 versions"],
          },
          sourceMap: !config.isProduction,
          plugins: () => [autoprefixer],
        },
      },
      {
        loader: "resolve-url-loader",
        options: {
          sourceMap: !config.isProduction,
        },
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: !config.isProduction,
        },
      },
    ],
  };
};
