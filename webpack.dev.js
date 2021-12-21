const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: "development",
    output: {
        filename:"main.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'template.html'
        })
    ],
    module: {   
        rules: [
             { 
                test: /\.s[ac]ss$/i,
                use: [ 
                    "style-loader", 
                    "css-loader", 
                    "sass-loader"
                ]
            },
        ]
    }

})