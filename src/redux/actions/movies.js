import { ADD_FAVORITE, ADD_MOVIES } from '../constants/movies';

export const addFavorite = favorite => ({
  type: ADD_FAVORITE,
  favorite,
});

export const addMovies = lists => ({
  type: ADD_MOVIES,
  lists,
});
