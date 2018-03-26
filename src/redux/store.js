import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = window.__PRELOADED_STATE__ || {};

const store = window
  ? createStore(
      rootReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  : createStore(rootReducer, initialState);

export default store;
