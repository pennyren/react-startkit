const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

let config = Object.assign({}, baseConfig, {
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js']
    }
});

config.plugins.push(
    new OpenBrowserPlugin({
        url: 'http://localhost:8080'
    })
);

module.exports = config;