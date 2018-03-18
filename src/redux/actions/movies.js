import {ADD_FAVORITE} from '../constants/movies';

export const addFavorite = favorite => {
    return dispatch => {
        dispatch({
            type: ADD_FAVORITE,
            favorite
        });
    };
};
