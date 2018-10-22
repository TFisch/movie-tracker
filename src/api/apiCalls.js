import { apiKey } from '../api/apiKey';

export const fetchMovies = async () => {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018`;
    const response = await fetch(url);
    const data = await response.json();
    return cleanMoviesData(data.results);
  } catch (error) {
    throw (new Error(error.message));
  }
};

export const cleanMoviesData = async (movies) => {
  try {
    return movies.map(movie => {
      const { id, title, poster_path, release_date, vote_average, overview } = movie;
      const fullPosterPath = `https://image.tmdb.org/t/p/w200${poster_path}`;
      return (
        {
          movie_id: id,
          title,
          poster_path: fullPosterPath,
          release_date,
          vote_average,
          overview
        }
      );
    });
  } catch (error) {
    throw (alert("Raw movie data could not be processed " + error));
  }
};

export const login = async ({ email, password }) => {
  try {
    const url = 'http://localhost:3000/api/users';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    });
    const user = await response.json();
    const { id, name } = user.data;
    createLocalUser(name);
    return { user_id: id, name };
  } catch (error) {
    throw (alert("Could not retrieve user information " + error));
  }
};

export const signUp = async ({ userName, email, password }) => {
  try {
    const url = 'http://localhost:3000/api/users/new';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ name: userName, email, password }),
      headers: { 'Content-Type': 'application/json' }
    });
    const user = await response.json();
    return { id: user.id, name: userName };
  } catch (error) {
    throw (alert("Could process specified user info " + error));
  }
};

export const postFavorites = async (movie) => {
  try {
    const url = 'http://localhost:3000/api/users/favorites/new';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: { 'Content-Type': 'application/json' }
    });
    return await response.json();
  } catch (error) {
    throw (alert("Could not set your favorites in storage " + error));
  }
};

export const getFavorites = async ({ user_id }) => {
  try {
    const url = `http://localhost:3000/api/users/${user_id}/favorites`;
    const response = await fetch(url);
    const usersFavorites = await response.json();
    return usersFavorites.data;
  } catch (error) {
    throw (alert("Could not retrieve your favorite movies " + error));
  }
};

export const deleteFavorite = async (user_id, movie_id) => {
  try {
    const url = `http://localhost:3000/api/users/${user_id}/favorites/${movie_id}`;
    const response = await fetch(url, { method: 'DELETE' });
    return response.json();
  } catch (error) {
    throw (alert("Could not remove favorite from storage " + error));
  }
};

export const saveFavoriteLocally = (favoriteData) => {
  if (localStorage.userObject) {
    const user = JSON.parse(localStorage.userObject);
    const favorites = [...user.userFavorites, favoriteData];
    const userToStore = { ...user, userFavorites: favorites };
    const storableUser = JSON.stringify(userToStore);
    localStorage.setItem('userObject', storableUser);
  }
};

export const deleteFavoriteLocally = (favoriteData) => {
  if (localStorage.userObject) {
    const user = JSON.parse(localStorage.userObject);
    const userFavorites = user.userFavorites.filter(movie => favoriteData.movie_id !== movie.movie_id);
    const userToStore = { ...user, userFavorites };
    const storableUser = JSON.stringify(userToStore);
    localStorage.setItem('userObject', storableUser);
  }
};

export const createLocalUser = (name) => {
  const userToStore = { name };
  const storableUser = JSON.stringify(userToStore);
  localStorage.setItem('userObject', storableUser);
};

export const setFavoritesToLocal = (userFavorites, user) => {
  const userToStore = { name: user.name, userFavorites };
  const storableUser = JSON.stringify(userToStore);
  localStorage.setItem('userObject', storableUser);
};