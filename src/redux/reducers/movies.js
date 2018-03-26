import { ADD_FAVORITE,ADD_MOVIES } from '../constants/movies';

const initialState = {
    favorites: [],
    lists: [],
};

export default (state = initialState, action) => {
    console.log('movies Reducer ', action.type , action);
    switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
          favorites: [...state.favorites, action.favorite],
      };
      case ADD_MOVIES:
          return {
              ...state,
              lists: action.lists,
          };

    default:
      return state;
  }
};
