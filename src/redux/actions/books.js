import { ADD_FAVORITE, ADD_BOOKS } from '../constants/books';

export const addFavorite = favorite => ({
  type: ADD_FAVORITE,
  favorite,
});

export const addBooks = lists => ({
  type: ADD_BOOKS,
  lists,
});
