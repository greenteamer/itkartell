// const express = require('express');
// const path = require('path');

import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/app.js';
import Template from './template.js';

const app = express();

const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

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

// app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', '/static/index.html')));

app.get('/', (req, res) => {
  const body = renderToString(<App />);
  const title = 'My own title';
  res.send(Template({
    body,
    title,
  }));
});

app.listen(3000, () => console.log('App starts in port 3000'));
