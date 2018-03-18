import React from 'react';
import { render } from 'react-dom';
import Containers from './containers';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './redux/store';

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route component={Containers} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

