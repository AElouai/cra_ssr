import { createStore } from 'redux';
import rootReducer from '../../src/redux/reducers/index';

const createServerStore = (initialState= {}) => {

  return createStore(rootReducer, initialState)
};

export default createServerStore;
