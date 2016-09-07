const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

let config = Object.assign({}, require('./webpack.base'));

config.plugins.push(
    new OpenBrowserPlugin({
        url: 'http://localhost:8080'
    })
);

module.exports = config;