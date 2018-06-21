const webpack = require("webpack");

module.exports = function providePlugin(context, definitions = {}) {
  return new webpack.DefinePlugin(definitions);
};
//
// new DefinePlugin(
//     {
//         'process.env': {
//             VUE_APP_CLI_UI_URL: '""',
//             NODE_ENV: '"production"',
//             BASE_URL: '"/"'
//         }
//     }
// ),
