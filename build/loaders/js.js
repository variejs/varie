module.exports = function jsLoader() {
  return {
    test: /\.js$/,
    exclude: /(node_modules)/,
    // TODO - cant get babel loader to work properly
    // use: {
    //     loader: 'babel-loader',
    // }
  };
};
