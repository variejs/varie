module.exports = function fontsLoader(context) {
  return {
    test: /\.(woff2?|ttf|eot|svg|otf)$/,
    loader: "file-loader",
    options: {
      name: path => {
        if (!/node_modules/.test(path)) {
          return "fonts/[name].[ext]?[hash]";
        }

        return (
          "fonts/vendor/" +
          path
            .replace(/\\/g, "/")
            .replace(/((.*node_modules)|fonts|font|assets)\//g, "") +
          "?[hash]"
        );
      },
      publicPath: context.baseHref
    }
  };
};
