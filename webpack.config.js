var webpack = require("webpack");
var path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, "./docs");
var APP_DIR = path.resolve(__dirname, "./docs/src");

var config = {
    entry: APP_DIR + "/main.js",
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: "babel-loader"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader", options: { importLoaders: 1 }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                include: APP_DIR,
                loader: ExtractTextPlugin.extract(
                    "css-loader!sass-loader"
                )
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|ico|jpeg|jpg)$/,
                loader: "file-loader?name=contents/[name]-[hash].[ext]"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ]
};

module.exports = config;