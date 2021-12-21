const path = require('path')


module.exports = {
    entry: "./src/index.js",
    output: {
        filename:"main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath:'./images/'
                    }
                }
            }
        ],
    }
}