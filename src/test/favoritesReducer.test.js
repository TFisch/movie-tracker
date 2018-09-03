import { favoritesReducer } from '../reducers/favoritesReducer';
import * as mockData from '../test/mockData';
import * as actions from '../actions';

describe('favoritesReducer', () => {
  const {
    mockCleanMovieData,
    mockCleanMovieDataTwo,
    mockCleanMoviesDataArray
  } = mockData;
  const {
    resetTheStore,
    addFavorite,
    removeFavorite,
    setUserFavorites
  } = actions;
  
  it('should return the default state', () => {
    const expected = [];
    const result = favoritesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with an array of movie objects when addFavorite is called', () => {
    const expected = [mockCleanMovieData];
    const result = favoritesReducer(undefined, addFavorite(mockCleanMovieData));
    expect(result).toEqual(expected);
  });

  it('should return state with an array of movies minus the one passed into removeFavorite', () => {
    const expected = [mockCleanMovieDataTwo];
    const result = favoritesReducer(mockCleanMoviesDataArray, removeFavorite(mockCleanMovieData));
    expect(result).toEqual(expected);
  });

  it('should return state of favorites array when user login in', () => {
    const expected = mockCleanMoviesDataArray;
    const result = favoritesReducer(undefined, setUserFavorites(mockCleanMoviesDataArray));
    expect(result).toEqual(expected);
  });

  it('should return state of an empty array when resetTheStore is called', () => {
    const expected = [];
    const result = favoritesReducer(mockCleanMovieData, resetTheStore());
    expect(result).toEqual(expected);
  });
});
