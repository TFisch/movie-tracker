import { getMovies } from '../helper';


const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018`;

export const fetchMovies = async () => {
  let resolvedMovies;
  const response = await fetch(url);
  const data = await response.json();
  return (resolvedMovies = await getMovies(data));
}