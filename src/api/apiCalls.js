import { apiKey } from '../api/apiKey';


export const fetchMovies = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

export const login = async ({ email, password }) => {
  const url = 'http://localhost:3000/api/users'
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await response.json();
  return data.results;
}

export const signUp = async ({ userName, email, password }) => {
  const url = 'http://localhost:3000/api/users/new'
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ name: userName, email, password }),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await response.json();
  return data.results;
}

