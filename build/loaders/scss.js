const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = function scssLoader(context) {
  return {
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: !context.isProduction,
          minimize: context.isProduction,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          autoprefixer: {
            browsers: ["last 2 versions"],
          },
          sourceMap: !context.isProduction,
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
          sourceMap: !context.isProduction,
        },
      },
    ],
  };
};
//
//
// new MiniCssExtractPlugin(
//     {
//         filename: 'css/[name].[contenthash:8].css',
//         chunkFilename: 'css/[name].[contenthash:8].css'
//     }
// ),
