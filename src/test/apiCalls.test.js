import React from 'react';
import { fetchMovies } from '../api/apiCalls';
import { mockFullData } from '../test/mockData'

describe('fetchMovies', async () => {
  it('should fetch the intial movie data', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockFullData)
    }))
    const expected = 'https://api.themoviedb.org/3/discover/movie?api_key=45850ad06ddc2c2c2530d35aa8981c6c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018';
    fetchMovies();
    expect(window.fetch).toHaveBeenCalledWith(expected)
  })
})