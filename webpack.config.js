const path = require('path');
const webpack = require('webpack');

// modeがdebugかを判定
var is_debug = process.env.NODE_ENV !== "production";

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [{
            // Reactの設定
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }]
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                },
                'postcss-loader', 'sass-loader'
            ],
        }]
    },
    devtool: is_debug ? 'source-map' : 'none',

    // webpack-dev-serverの設定
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true
    },

    // プラグイン
    plugins: is_debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
}