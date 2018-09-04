import * as actions from '../actions';
import * as mockData from '../test/mockData';

describe('actions tests', () => {
  const {
    mockUncleanMovies,
    mockCleanMovieData,
    mockMovieId,
    mockUserData
  } = mockData;

  it('should return a object with type of ADD_MOVIES, with the movies', () => {
    const expectation = { type: 'ADD_MOVIES', movieData: mockUncleanMovies };
    const result = actions.addMovies(mockUncleanMovies);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of ADD_FAVORITE, with a movie', () => {
    const expectation = { type: 'ADD_FAVORITE', movie: mockCleanMovieData };
    const result = actions.addFavorite(mockCleanMovieData);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of REMOVE_FAVORITE, with a movie id', () => {
    const expectation = { type: 'REMOVE_FAVORITE', movie_id: mockMovieId };
    const result = actions.removeFavorite(mockCleanMovieData);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of SET_ACTIVE_USER, with a user id and name', () => {
    const expectation = {
      type: 'SET_ACTIVE_USER',
      user_id: mockUserData.user_id,
      name: mockUserData.name
    };
    const result = actions.setActiveUser(mockUserData);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of SET_USER_FAVORITES, with favorites', () => {
    const expectation = {
      type: 'SET_USER_FAVORITES',
      favorites: mockUncleanMovies
    };
    const result = actions.setUserFavorites(mockUncleanMovies);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of RESET_THE_STORE', () => {
    const expectation = {
      type: 'RESET_THE_STORE'
    };
    const result = actions.resetTheStore();
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of MANAGE_SELECTED_MOVIE', () => {
    const expectation = {
      type: 'MANAGE_SELECTED_MOVIE',
      movie: mockCleanMovieData
    };
    const result = actions.manageSelectedMovie(mockCleanMovieData);
    expect(result).toEqual(expectation);
  });
});
