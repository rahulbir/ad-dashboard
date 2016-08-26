const webpack = require('webpack');

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname,
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, include: __dirname + '/app', loader: "babel-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url-loader?limit=8192' }
    ]
  }
};
