var path = require('path');
var webpack = require('webpack');
const copyFiles = require('./webpack.config.copyfiles');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var env = process.env.NODE_ENV;
console.log("=======" + env + "=======");

var config = {
    mode: env,
    devtool: "inline-source-map",
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'url-loader?limit=8192&name=[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader?limit=8192&name=[name].[ext]'
            },
            {
                test: /\.(t|j)sx?$/,
                use: {
                    loader: 'awesome-typescript-loader'
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.json', '.ts', '.tsx', '.less', '.js', '.jsx', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "React Mobx Demo",
            filename: 'index.html',
            template: 'index.tmpl.html',
            hash: true,
            inject: true
        }),
        new CopyWebpackPlugin(copyFiles, {
            debug: 'info'
        }),
        new FriendlyErrorsWebpackPlugin(),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    //在html页面中使用script标签引入库，而不是打包到*.bundle.js文件中
    externals: {
        'antd': 'antd',
        'jquery': 'jQuery',
        'jquery': '$',
        'jquery-ui': 'jQuery.ui',
        'jquery-ui': '$.ui',
        'intl': 'Intl',
        'react-intl': 'ReactIntl',
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        // compress: true,
        host: 'localhost',
        port: 8080
    }
};

//如果是生产环境，要最小化压缩js文件
if (env === 'production') {
    //打包时对js文件进行最小化压缩
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
    //消除压缩后的文件在界面引用时发出的警告
    config.plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }));
}

module.exports = config;