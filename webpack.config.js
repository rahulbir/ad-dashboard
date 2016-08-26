const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, include: __dirname + '/app', loader: "babel-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  headers: { "Access-Control-Allow-Origin": "*" },
  plugins: [ HTMLWebpackPluginConfig ]
};
