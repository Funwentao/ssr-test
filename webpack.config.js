const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require('webpack');


module.exports = {
    entry :{
        index: "./src/entry-client.js"
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].[hash].bundle.js',
        publicPath:'/'
    },
    module:{
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader', 
                use: ['css-loader']
            })
        },{
            test: /\.vue$/,
            loader: 'vue-loader',
        },{
            test: /\.less$/,
            //loader: "style-loader!css-loader!less-loader",
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader', 
                use: ['css-loader', 'less-loader']
            })
        },{
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'url-loader'
        }]
    },
    devServer: {
        contentBase:path.resolve(__dirname,'dist'), 
        historyApiFallback: true,
        inline: true,
        host: 'localhost',
        port: '8080',
        open: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            filename: 'index.html',
            template: './index.html',
            chunks:['index']
        }),
        new VueLoaderPlugin(),
        new ExtractTextPlugin({filename: "css/[name].[hash].css", allChunks: true}),
        new webpack.HotModuleReplacementPlugin()
    ]
}