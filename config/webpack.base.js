const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: path.resolve(__dirname, '../app/index.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders:[{
			test: /\.js[x]?$/,
            exclude: [/node_modules/],
            loader: 'babel-loader'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader!postcss-loader'
		}]
	},
	postcss: () => ([autoprefixer]),
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, '../index.html')
		})
	]
};

module.exports = config;