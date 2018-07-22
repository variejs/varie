const autoprefixer = require("autoprefixer");
const loadIf = require("./../helpers/loadIf");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(config) {
  return {
    test: /\.s[ac]ss|\.css/,
    use: [
      ...loadIf(!config.isProduction, ["cache-loader"]),
      {
        loader: config.isHot ? "style-loader" : MiniCssExtractPlugin.loader,
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          importLoaders: 1,
          minimize: config.isProduction,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: true,
          ident: "postcss",
          autoprefixer: {
            browsers: ["last 2 versions"],
          },
          plugins: () => [autoprefixer],
        },
      },
      {
        loader: "resolve-url-loader",
        options: {
          sourceMap: true,
        },
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true,
        },
      },
    ],
  };
};
