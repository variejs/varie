module.exports = function imageLoader(context) {
  return {
    test: /\.(png|jpe?g|gif)$/,
    loaders: [
      {
        loader: "file-loader",
        options: {
          name: path => {
            if (!/node_modules/.test(path)) {
              return "images/[name].[ext]?[hash]";
            }

            return (
              "images/vendor/" +
              path
                .replace(/\\/g, "/")
                .replace(/(.*node_modules|images|image|img|assets)\//g, "") +
              "?[hash]"
            );
          },
          publicPath: context.baseHref
        }
      },
      {
        loader: "img-loader",
        options: {
          enabled: true,
          gifsicle: {},
          mozjpeg: {},
          optipng: {},
          svgo: {}
        }
      }
    ]
  };
};
