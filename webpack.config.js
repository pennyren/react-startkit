const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = {
	entry: {
		bundle: path.resolve(__dirname, './app/index.js')
	},
	output: {
		filename: path.resolve(__dirname, './dist/[name].[hash:8].js')
	},
	module: {
		loaders:[]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, './index.html')
		}),
		new OpenBrowserPlugin({
        	url: 'http://localhost:8080'
    	})
	]
};

module.exports = config;