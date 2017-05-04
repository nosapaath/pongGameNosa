const webpack = require('webpack');
const path = require('path');
const resolve = require('path').resolve;
const src = resolve(__dirname, 'src');
const build = resolve(__dirname, 'build');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},

	output: {
		path: build,
		filename: 'bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				include: [src],
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader?configFile=.eslintrc',
				include: [src],
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['env'],
				},
				include: [src],
				exclude: /node_modules/,
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=public/fonts/[name].[ext]&emitFile=false'
			}
		]
	},

	devServer: {
		historyApiFallback: true,
		host: '0.0.0.0',
		port: 3000,
		stats: 'errors-only',
		publicPath: '/build/',
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000,
			ignored: /node_modules/
		}
	},

	plugins: [
		new OpenBrowserPlugin({ url: 'http://localhost:3000/' }),
	]
};
