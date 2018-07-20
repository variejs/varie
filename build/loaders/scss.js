const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(config) {
  return {
    test: /\.s[ac]ss|\.css/,
    use: [
      ...(!config.isProduction ? ["cache-loader"] : []),
      {
        loader: config.isHot ? "style-loader" : MiniCssExtractPlugin.loader,
      },
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          minimize: config.isProduction,
          sourceMap: config.isProduction,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          autoprefixer: {
            browsers: ["last 2 versions"],
          },
          sourceMap: config.isProduction,
          plugins: () => [autoprefixer],
        },
      },
      {
        loader: "resolve-url-loader",
        options: {
          sourceMap: config.isProduction,
        },
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: config.isProduction,
        },
      },
    ],
  };
};
