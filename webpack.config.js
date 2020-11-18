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
        }, {
            test: /\.(jpeg|png|gif|svg|ico|jpg)$/i,
            loader: "url-loader",
            include: path.resolve(__dirname, 'src/images'),
            options: {
                limit: 8192,
                // 出力するDataURLに変換しなかった画像の名前
                // [バンドル前のファイル名].[ファイルの拡張子]
                name: '[name].[ext]',
                // デフォルトではoutput.pathに指定したパスに出力される
                // 今回は、public/imagesに出力させたい
                outputPath: '../images/',
                // 出力させるファイルからの画像読み込み先
                // 今夏はpublic/index.htmlからpublic/imagesの画像をお読み込みたいため、以下の指定になる
                publicPath: path => './images/' + path
            }
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