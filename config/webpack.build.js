const webpack = require('webpack');
const optimize = webpack.optimize;
let config = Object.assign({}, require('./webpack.base'));

config.plugins.push(
    new optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new optimize.OccurrenceOrderPlugin(),
    new optimize.DedupePlugin()
);

module.exports = config;