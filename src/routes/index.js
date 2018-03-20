import React, {Component} from 'react';
import Home from '../screens/home';
import FoF from '../screens/404';
import Movies from '../screens/movies';
import Books from '../screens/books';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class View extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movies/:param" component={Movies} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:param" component={Books} />
        <Route component={FoF} />
      </Switch>
    );
  }
}

export { View, BrowserRouter };
