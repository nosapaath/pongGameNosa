const join = require('path').join;
const resolve = require('path').resolve;
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const PATHS = {
	src: join(__dirname, 'src'),
	fonts: join(__dirname, 'fonts'),
	build: join(__dirname, 'build')
};

module.exports = {
	entry: {
		src: './src/index.js'
	},
	output: {
		path: __dirname,
		filename: 'build/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				include: PATHS.src
			}, {
				test: /\.js$/,
				loaders: ['babel', 'eslint'],
				include: PATHS.src,
				exclude: /node_modules/
			}, {
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file?name=public/fonts/[name].[ext]'
			}
		]
	},
	devServer: {
		inline: true,

		// display only errors to reduce the amount of output
		stats: 'errors-only',

		// parse host and port from env so this is easy
		// to customize
		host: '0.0.0.0',
		port: '3000',
		watchOptions: {
			aggregateTimeout: 300,
			poll: true
		}
	},
	plugins: [
		new OpenBrowserPlugin({ url: 'http://localhost:3000/'}),
	]
};
