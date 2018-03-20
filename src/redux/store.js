import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import colors from 'colors';
export const history = createHistory();

const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];


// Add process.env.NODE_ENV === 'development'
// or remove this extensions in production
if (window) {
  const devToolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const initialState = window.__PRELOADED_STATE__ || {};
console.log(' window.__PRELOADED_STATE__'.red,  window.__PRELOADED_STATE__);
// Allow the passed state to be garbage-collected
const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
