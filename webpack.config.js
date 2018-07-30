let varieBundler = require('varie-bundler');
module.exports = function(env, argv) {
 return varieBundler(env, argv, __dirname);
};
