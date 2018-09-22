import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
// import ReactDOM from "react-dom";

import Main from './main';

const Page = () => (
  <div>Page</div>
)

const Page2 = () => (
  <div>Page2</div>
)

const NoMatch = () => (
  <div>NoMatch</div>
)

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/page' component={Page} />
      <Route exact path='/page2' component={Page2} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default App;
