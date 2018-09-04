import { apiKey } from '../api/apiKey';
import { cleanMoviesData } from './helper';
import { addMovies } from '../actions';

export const fetchMovies = () => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018`;
    const response = await fetch(url);
    const data = await response.json();
    const cleanMovies = await cleanMoviesData(data.results);
    dispatch(addMovies(cleanMovies));
  };
};
