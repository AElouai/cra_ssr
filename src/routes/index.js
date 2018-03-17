import React, {Component} from 'react';
import Home from '../screens/home';
import FoF from '../screens/404';
import About from '../screens/about';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class View extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/:param" component={About} />
        <Route component={FoF} />
      </Switch>
    );
  }
}

export { View, BrowserRouter };
