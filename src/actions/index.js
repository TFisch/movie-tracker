export const addMovies = (movieData) => ({
  type: 'ADD_MOVIES',
  movieData
});

export const addFavorite = (movie) => ({
  type: 'ADD_FAVORITE',
  movie
});

export const removeFavorite = ({ movie_id }) => ({
  type: 'REMOVE_FAVORITE',
  movie_id
});

export const setActiveUser = ({ user_id, name }) => ({
  type: 'SET_ACTIVE_USER',
  user_id,
  name
});

export const setUserFavorites = (favorites) => ({
  type: 'SET_USER_FAVORITES',
  favorites
});

export const resetTheStore = () => ({
  type: 'RESET_THE_STORE'
});

export const manageSelectedMovie = (movie) => ({
  type: 'MANAGE_SELECTED_MOVIE',
  movie
});

export const triggerLogin = (status) => ({
  type: 'TRIGGER_LOGIN',
  status
});
