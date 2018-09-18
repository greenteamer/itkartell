import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './app';


export default (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    res.send(`
      <!doctype html>
      <html>
        <head>
          <title>My Universal App</title>
          <link rel='stylesheet' href='bundle.css'>
        </head>
        <body>
          <div id='app'></div>
          <script src='bundle.js'></script>
        </body>
      </html>
    `)
  } else if (process.env.NODE_ENV === 'production') {
    res.send(`
      <!doctype html>
      <html>
        <head>
          <title>My Universal App</title>
          <link rel='stylesheet' href='bundle.css'>
        </head>
        <body>
          <div id='app'>${renderToString(
            <StaticRouter location={req.url} context={{}}>
              <App />
            </StaticRouter>
          )}</div>
          <script src='bundle.js'></script>
        </body>
      </html>
    `)
  }
}
