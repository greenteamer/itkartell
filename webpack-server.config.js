const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const path = require('path');


module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  // entry: './server/index.js',
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'server/index.js'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
}
