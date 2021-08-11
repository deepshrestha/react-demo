const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './public/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                // { 
                //     from: 'public', to: 'assets'
                // },
                { 
                    from: 'public/build/**', to: 'assets'
                },
                { 
                    from: 'public/dist/**', to: 'assets'
                },
                { 
                    from: 'public/plugins/**', to: 'assets'
                }
            ]
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8081,
        historyApiFallback: true
    },
    devtool: 'inline-source-map'
};