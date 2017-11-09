const path = require('path');

let mix = require('laravel-mix');
let env = process.env.NODE_ENV;

if (env !== 'local') {
	if (env !== 'development') {
		mix.config.production = true;
	}
}

/*
|--------------------------------------------------------------------------
| Mix Asset Management
|--------------------------------------------------------------------------
| https://github.com/JeffreyWay/laravel-mix/tree/master/docs#readme
|
*/
mix
	.typeScript('app/app.ts', 'js')
	.extract([
		'ajv',
		'axios',
		'inversify',
		'lodash',
		'moment-timezone',
		'reflect-metadata',
		'vue',
		'vue-class-component',
		'vue-property-decorator',
		'vue-router',
		'vuex',
	])
	.sass('./resources/sass/app.scss', 'css')
	.setPublicPath('dist')
	.browserSync({
		open: 'local',
		proxy: env.APP_URL,
		files: ['dist/**/*.js', 'dist/**/*.css'],
	})
	.sourceMaps()
	.webpackConfig({
		node: {
			fs: 'empty',
		},
		resolve: {
			alias: {
				'@app': path.join(__dirname, 'app'),
				'@routes': path.join(__dirname, 'routes'),
				'@config': path.join(__dirname, 'config'),
				'@store': path.join(__dirname, 'app/store'),
				'@storage': path.join(__dirname, 'storage'),
				'@models': path.join(__dirname, 'app/models'),
				'@resources': path.join(__dirname, 'resources'),
				'@views': path.join(__dirname, 'resources/views'),
				'@varie': path.join(__dirname, 'framework'),
				'@components': path.join(__dirname, 'app/components'),
			},
		},
	})
	.options({
		extractVueStyles: true,
	});

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.ts(src, output); <-- Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.dev');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
