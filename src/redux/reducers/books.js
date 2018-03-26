import {ADD_FAVORITE, ADD_BOOKS} from '../constants/books';

const initialState = {
    favorites: [],
    lists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
          favorites: [...state.favorites, action.favorite],
      };
      case ADD_BOOKS:
          return {
              ...state,
              lists: action.lists,
          };

    default:
      return state;
  }
};
