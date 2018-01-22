const express = require("express");

const middleware = {
  dev: require("webpack-dev-middleware"),
  hot: require("webpack-hot-middleware")
};

const webpack = require("webpack");
const config = require("./webpack.config");

const app = express();
const compiler = webpack(config);

app.use(
  middleware.dev(compiler, {
    hot: true,
    publicPath: "/assets/",
    watchOptions: {
      aggregateTimeout: 300,
      poll: 500
    }
  })
);
app.use(middleware.hot(compiler));

app.use("*", express.static("public"));

app.listen(3000);
