import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('app')
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
  module.hot.accept('./app', function() {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
      , document.getElementById('app')
    );
  });
}
