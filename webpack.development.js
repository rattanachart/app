/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = require('./webpack.base')({
    mode: 'development',
    devtool: 'eval-source-map',
    performance: { hints: false },
    entry: [
        path.join(process.cwd(), 'src/index.js'),
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    // Development plugins.
    plugins: [
        // Tell webpack we want hot reloading!
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            chunksSortMode: 'none',
            inject: true,
            template: 'public/index.html',
            filename: 'index.html',
            hash: true
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:5000' })
    ]
});
