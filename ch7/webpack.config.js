// var webpack = require("webpack");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname + "/dist/assets",
    filename: "bundle.js",
    sourceMapFilename: "bundle.map",
  },
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            query: {
              presets: ["es2015", "react"]
            },
          },
        ],
      },
    ],
  },
};
