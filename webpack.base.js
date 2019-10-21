/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');

process.noDeprecation = true;

module.exports = option => ({
    mode: option.mode,
    entry: option.entry,
    devtool: option.devtool,
    performance: option.performance || {},

    devServer: {
        compress: true,
        port: 5000,
        inline: true,
        historyApiFallback: {
            index: '/'
        }
    },
    node: {
        fs: 'empty'
    },

    output: Object.assign({
        path: path.resolve(process.cwd(), 'build'),
        publicPath: '/'
    }, option.output), // Merge with env dependent settings

    plugins: option.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            }
        })
    ]),

    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx'],
    },

    optimization: {
        namedModules: true,
        splitChunks: {
            name: 'vendor',
            minChunks: 2
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            },
            {
                // Preprocess our own .scss files
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                // Preprocess 3rd party .css files located in node_modules
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'image/png',
                            name: 'images/[name].[ext]',
                        }
                    }
                ],
            },
            {
                test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
                use: 'file-loader',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'image/svg+xml',
                            name: 'images/[name].[ext]',
                        }
                    }
                ],
            },
        ]
    },
});
