const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./client/index.js",
    mobile: "./client/mobile.js",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.(css|less)$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve("./public/index.html"),
      favicon: path.resolve("./public/favicon.ico"),
      title: "master-nginx",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve("./public/index.html"),
      favicon: path.resolve("./public/favicon.ico"),
      title: "master-nginx",
      filename: "mobile.html",
      chunks: ["mobile"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
    },
  },
};
