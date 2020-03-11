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
    contentBase: "./dist",
    hot: true
  }
};