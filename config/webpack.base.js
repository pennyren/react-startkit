const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appSrc = '../app';

const config = {
	entry: path.resolve(__dirname, appSrc + '/app.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders:[{
			test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader!postcss-loader'
		}, {
			test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
            loader: 'url-loader?limit=8192'
        }]
	},
	postcss: () => [require('postcss-cssnext')],
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, appSrc + '/index.html')
		})
	]
};

module.exports = config;