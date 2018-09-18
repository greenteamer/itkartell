import React from 'react';

export default (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>My Universal App</title>
        <link rel='stylesheet' href='bundle.css'>
      </head>
      <body>
        <div id='app'>Hello static</div>
        <script src='bundle.js'></script>
      </body>
    </html>
  `)
}
