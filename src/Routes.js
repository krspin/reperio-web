import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './containers/About';
import Login from './containers/Login';
import Donate from './containers/Donate';
import Recipe from './containers/Recipe';
import Home from './containers/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/lookup" component={Recipe} />
      <Route exact path="/about" component={About} />
      <Route exact path="/donate" component={Donate} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};
