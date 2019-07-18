const path =  require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry:"./src/index.ts" ,  //启动文件
    output:{
        path:path.resolve('./dist'),
        filename:"script/bundle.js" 
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test:/.tsx?$/,  //当读到以ts结尾的文件，交于ts-loader处理文件
                loader:"ts-loader"
            }
        ]
    },
    resolve:{
        extensions:[".ts",".js"]
    }
}