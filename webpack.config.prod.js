const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				WEBPACK: true
			}
		}),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
        include: path.resolve(__dirname, 'src'),
      }
    ]
  },
}
