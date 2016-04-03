var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: "./resources/assets/js/main.js",
        backstage:["./resources/assets/js/backstage/app.js"]
    },
    output: {
        path: path.resolve(__dirname, "public/"),
        filename: "js/[name].js",
        chunkFilename: "js/[id].chunk.js"
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            { test: /\.(css|less)$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader", "less-loader") },
            {
                test: /\.(svg|woff2|eot|woff|ttf)$/,
                loader: 'url',
                query: {
                    limit: 8140,
                    name: '/fonts/[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '/img/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("/css/app.css")
    ],
    devServer: {
        proxy: {
            '/*': {
                target: 'http://localhost:8000'
            }
        },
        host:"localhost",
        port:"4500"
    }
};
