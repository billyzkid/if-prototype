var path = require("path");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    debug: true,
    devtool: "source-map",
    entry: "./src/index",
    output: {
        path: "./build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            loader: "babel",
            test: /\.js$/,
            include: [
                path.join(__dirname, "src")
            ],
            query: {
                presets: ["es2015"]
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development")
            }
        }),
        new CopyWebpackPlugin([{
            from: "./src/index.html"
        }])
    ]
};