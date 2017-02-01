var path = require("path");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "eval",
  target: "web",
  entry: [
    "babel-polyfill",
    "./src/index"
  ],
  output: {
    filename: "index.js",
    path: path.join(__dirname, "build"),
    publicPath: 'http://localhost:8080/'
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
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([{
      from: "./package.json",
    }, {
      from: "./src/index.css",
    },{
      from: "./src/index.html",
    }, {
      from: "./src/main.js"
    }]),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development")
      }
    })
  ]
};