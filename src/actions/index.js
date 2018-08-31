export const addMovies = (movieData) => ({
  type: 'ADD_MOVIES',
  movieData
});

export const addFavorite = (movie) => ({
  type: 'ADD_FAVORITE',
  movie
});

export const setActiveUser = ({ id, name }) => ({
  type: 'SET_ACTIVE_USER',
  id,
  name
});

export const setUserFavorites = (favorites) => ({
  type: 'SET_USER_FAVORITES',
  favorites
});