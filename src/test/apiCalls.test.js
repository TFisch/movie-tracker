import { fetchMovies, signUp, cleanMoviesData } from '../api/apiCalls';
import { mockFullData, mockEmail, mockPassword, mockUncleanMovies, mockNewEmail, mockNewUsername, mockResolvedUserData, mockUserData } from '../test/mockData';

describe('fetchMovies', () => {
  it('should fetch the intial movie data', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockFullData)
    }));
    const expected = 'https://api.themoviedb.org/3/discover/movie?api_key=45850ad06ddc2c2c2530d35aa8981c6c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018';
    fetchMovies();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it.skip('should return an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error(error.message)));
    const expected = 'Fetch failed';
    const result = await fetchMovies();
    expect(result).toEqual(expected);
  });
});

describe('cleanMoviesData', () => {
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

describe('signup', () => {
  let url;
  let mockResponse;
  beforeEach(() => {
    url = 'http://localhost:3000/api/users/new';
    mockResponse = {
      method: 'POST',
      body: JSON.stringify({}),
      headers: { 'Content-Type': 'application/json' }
    };
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
      { status: 200, json: () => Promise.resolve(mockUserData)}
    ));
  });

  it('should return a success message when entering valid user data', async () => {
    await signUp(mockNewUsername, mockEmail, mockPassword);
    expect(window.fetch).toHaveBeenCalledWith(url, mockResponse);
  });
});

describe('postFavorites', () => {
  it.skip('should invoke fetch with the correct parameters', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockFullData)
    }));
    await signUp(mockNewUsername, mockEmail, mockPassword);
    expect(window.fetch).toHaveBeenCalledWith(mockNewEmail);
  });
});
