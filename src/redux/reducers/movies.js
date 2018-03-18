import { ADD_FAVORITE } from '../constants/movies';

const initialState = {
    favorites: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
          favorites: [...state.favorites, action.favorite],
      };

    default:
      return state;
  }
};
