import { moviesReducer } from '../reducers/moviesReducer';
import * as mockData from '../test/mockData';
import * as actions from '../actions';

describe('moviesReducer', () => {
  const { mockCleanMovieData } = mockData;
  const { addMovies } = actions;
  it('should return the default state', () => {
    const expected = [];
    const result = moviesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with the top twenty movies', () => {
    expect(moviesReducer(undefined, addMovies(mockCleanMovieData))).toEqual(mockCleanMovieData);
  });
});
