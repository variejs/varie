module.exports = function imageLoader() {
  return {
    test: /\.(png|jpe?g|gif)$/,
    loaders: [
      {
        loader: "file-loader",
        options: {
          name: "img/[name].[ext]?[hash:8]",
        },
      },
      {
        loader: "img-loader",
        options: {
          enabled: true,
          gifsicle: {},
          mozjpeg: {},
          optipng: {},
          svgo: {},
        },
      },
    ],
  };
};
