const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/app/hello/index.js',
    output: {
        path: __dirname +'/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase:'./build',
        historyApiFallback: true,
        inline: true,
        hot: true 
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:'babel-loader',
                },
                exclude: /node-modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },{
                        loader:'css-loader',
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    },{
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('from zhangqi'),
        new HtmlWebpackPlugin({
            template:__dirname + '/app/index.tmpl.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}