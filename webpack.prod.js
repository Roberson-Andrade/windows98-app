const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: "production",
    output: {
        filename:"main.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new htmlWebpackPlugin({
                template: 'template.html',
                minify: {
                    removeAttributeQuote: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), 
        new MiniCssExtractPlugin({filename: "[name].[contenthash].css"})
    ],
    module: {
        rules: [
            { 
                test: /\.s[ac]ss$/i,
                use: [ 
                    MiniCssExtractPlugin.loader,
                    "css-loader", 
                    "sass-loader"
                ]
            },
        ]
    }
})