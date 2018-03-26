import React from 'react';
import { render } from 'react-dom';
import Containers from './containers';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={Containers} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
