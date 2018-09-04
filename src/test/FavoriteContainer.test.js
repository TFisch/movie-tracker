import React from 'react';
import { FavoriteContainer, mapStateToProps } from '../containers/FavoriteContainer';
import { shallow } from 'enzyme';
import * as mockData from '../test/mockData';

describe('FavoriteContainer tests', () => {
  let wrapper;
  const { mockUncleanMovies } = mockData;
  beforeEach(() => {
    wrapper = shallow(
      <FavoriteContainer
        userFavorites={mockUncleanMovies}
      />
    );
  });

  it('renders the Card with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('MapStateToProps', () => {
    it('should have a favorites data array in props', () => {
      const { mockCleanMoviesDataArray } = mockData;
      const mockState = { userFavorites: mockCleanMoviesDataArray };
      const expected = { userFavorites: mockCleanMoviesDataArray };
      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });
  });
});
