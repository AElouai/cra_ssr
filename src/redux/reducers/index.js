import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from './movies';
import books from './books';

export default combineReducers({
    routing: routerReducer,
    movies,
    books
});
