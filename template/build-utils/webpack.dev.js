const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      systemvars: true,
      path: "./.env.development"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "../", "dist"),
    compress: true,
    port: 8080,
    hot: true
  }
};
