import { selectedReducer } from '../reducers/selectedReducer';
import * as mockData from '../test/mockData';
import * as actions from '../actions';

describe('selectedReducer', () => {
  const { mockSelectedMovie } = mockData;
  const { manageSelectedMovie } = actions;
  it('should return the default state', () => {
    const expected = {};
    const result = selectedReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an empty object if the same movie is selected', () => {
    const expected = {};
    selectedReducer(mockSelectedMovie, manageSelectedMovie(mockSelectedMovie));
    const result = selectedReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with the selected movie', () => {
    expect(selectedReducer(undefined, manageSelectedMovie(mockSelectedMovie))).toEqual(mockSelectedMovie);
  });
});
