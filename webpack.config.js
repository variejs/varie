const path = require('path');
const VarieBundler = require('varie-bundler');

module.exports = function(env, argv) {
 return new VarieBundler(argv, __dirname)
     .variables({

     })
     .aliases({
         "@app": path.join(__dirname, "app"),
         "@routes": path.join(__dirname, "routes"),
         "@config": path.join(__dirname, "config"),
         "@store": path.join(__dirname, "app/store"),
         "@models": path.join(__dirname, "app/models"),
         "@resources": path.join(__dirname, "resources"),
         "@views": path.join(__dirname, "resources/views"),
         "@components": path.join(__dirname, "app/components"),
     })
     .customWebpackConfig({

     })
     .addLoader()
     .addPlugin()
     .build()
}