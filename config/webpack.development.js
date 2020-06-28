const path = require("path");
const SSICompileWebpackPlugin = require('ssi-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode:'development',
    output:{
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    limit: 8192,
                    outputPath: 'static/images'
                }
            },
        ]
    },
    devServer: {
        inline: true, //检测文件变化，实时构建并刷新浏览器
        port: "9966",
        hot: true,
        proxy: {
            '/':{
                target:'http://10.112.16.96:8080',
                secure: false,
                changeOrigin: true
            },
        },
        //404 页面返回 index.html
        historyApiFallback: true,
    },
    plugins:[
        new SSICompileWebpackPlugin({
            localBaseDir: path.resolve(__dirname, '../src'),
            publicPath: ''
        }),
        new CopyWebpackPlugin([{
            // from: './src/static',
            // to: 'static'
            from : path.join(__dirname,'../src/static'),
            to : 'static'
        }])
    ],
    devtool:'eval-source-map'
}