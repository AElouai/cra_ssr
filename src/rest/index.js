import { Api } from "./api";

export const getBooks = () => {
  return Api(`books`).then(response => response.data, error => null);
};

export const getBook = ({id}) => {
  return Api(`books/${id}`).then(response => response.data, error => null);
};

export const getInitState = async () => {
  return await { movies: { favorites: [], lists: [], film: [] }, books: { favorites: [], lists: [], car: [] } };
}


export const switchPath = path => {
	const reduxState = { movies: { favorites: [], lists: [], film: [] }, books: { favorites: [], lists: [], car: [] } };
  if (path === "/books") {
    return getBooks().then(data => {
      reduxState.books.lists = data;
      return reduxState;
    });
	}else{
		return getInitState()
	}
};
