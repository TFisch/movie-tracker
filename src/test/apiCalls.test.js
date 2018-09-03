import React from 'react';
import { fetchMovies, login, signUp, cleanMoviesData } from '../api/apiCalls';
import { mockFullData, mockEmail, mockPassword, mockUncleanMovies, mockNewEmail, mockNewUsername } from '../test/mockData';

describe('fetchMovies', async () => {
  it('should fetch the intial movie data', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockFullData)
    }));
    const expected = 'https://api.themoviedb.org/3/discover/movie?api_key=45850ad06ddc2c2c2530d35aa8981c6c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018';
    fetchMovies();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });
});

describe('cleanMoviesData', async () => {
  it('should returned a clean version of movie data', async () => {
    const result = await cleanMoviesData(mockUncleanMovies);
    const expected = [{
      "movie_id": 299536,
      "overview": "This movie is totally fake",
      "poster_path": "https://image.tmdb.org/t/p/w200/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      "release_date": "2018-04-25",
      "title": "Mock: The Movie",
      "vote_average": 8.3
    }];
    expect(result).toEqual(expected);
  });
});

// describe.skip('calls fetch with the correct data when logging in a user', async () => {
//   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//     json: () => Promise.resolve(mockFullData)
//   }));
//   const expectedFetchBody = {
//     method: 'POST',
//     body: JSON.stringify({ mockEmail, mockPassword }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };
//   await login(mockEmail, mockPassword);
// });

describe('signup', async () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        name: mockNewUsername, mockEmail, mockPassword
      })
    }));
  });

  it.skip('fetch is called with the correct params', async () => {
    const expected = [
      'http://localhost:3000/api/users/new',
      {
        body: JSON.stringify({ name: mockNewUsername, mockEmail, mockPassword }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      }
    ];
    await signUp(mockNewUsername, mockEmail, mockPassword);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it.skip('should return an id and username when a new user is created', async () => {
    const expected = {
      "id": 'id', "name": 'name'
    };
    await expect(signUp(mockNewUsername, mockEmail, mockPassword)).resolves.toEqual(expected);
  });
});

describe('postFavorites', async () => {
  it.skip('should invoke fetch with the correct parameters', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockFullData)
    }));
    signUp(mockNewUsername, mockEmail, mockPassword);
    expect(window.fetch).toHaveBeenCalledWith(mockNewEmail);
  });
});
