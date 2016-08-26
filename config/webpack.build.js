const webpack = require('webpack');
const optimize = webpack.optimize;
let config = Object.assign({}, require('./webpack.base'));

config.plugins.push(
	new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: 'production'
        }
    }),
    new optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new optimize.OccurrenceOrderPlugin(),
    new optimize.DedupePlugin()
);

module.exports = config;