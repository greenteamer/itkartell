const express = require('express');
const path = require('path');

const app = express();

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  })
);

app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', express.static('static'));
app.use('/dist', express.static('dist'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/static/index.html')));

app.listen(3000, () => console.log('App starts in port 3000'));
