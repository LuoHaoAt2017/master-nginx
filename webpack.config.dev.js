const config = require("./webpack.config.js");
const { merge } = require("webpack-merge");
module.exports = merge(config, {
  mode: "development",
  devtool: "source-map",
  watch: true,
  devServer: {
    port: 8080,
    historyApiFallback: {
      rewrites: [
        {
          from: /\/index.html/,
          to: "/index.html",
        },
        {
          from: /\/mobile.html/,
          to: "/mobile.html",
        },
      ],
    },
  },
});
