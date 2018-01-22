const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",

  module: {
    rules: [{ test: /\.js$/, use: ["babel-loader"] }]
  },

  context: path.resolve(__dirname, "src/"),
  entry: {
    index: ["webpack-hot-middleware/client", "./index.js"]
  },

  output: {
    path: path.resolve("./dist"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
};
