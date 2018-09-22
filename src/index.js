import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './app';
import reducers from './reducers'


const history = createBrowserHistory();
const store = createStore(reducers);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('app')
);


if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
  module.hot.accept('./app', function() {
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
      , document.getElementById('app')
    );
  });
}
