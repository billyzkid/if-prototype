var path = require("path");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "eval",
  target: "electron",
  entry: [
    "babel-polyfill",
    "./src/index"
  ],
  output: {
    filename: "index.js",
    path: path.join(__dirname, "build")
  },
  module: {
    // preLoaders: [{
    //   test: /\.js$/,
    //   loader: "eslint",
    //   include: path.join(__dirname, "src")
    // }],
    loaders: [{
      test: /\.js$/,
      loader: "babel",
      include: path.join(__dirname, "src")
    }],
    "noParse": /\.map$/
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: "./package.json",
    }, {
      from: "./src/main.js",
    }, {
      from: "./src/index.html"
    }, {
      from: "./node_modules/xterm/dist/xterm.css"
    }]),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development")
      }
    })
  ]
};