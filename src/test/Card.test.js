import React from 'react';
import { Card, mapStateToProps, mapDispatchToProps } from '../containers/Card';
import { shallow } from 'enzyme';
import * as mockData from '../test/mockData';
import * as actions from '../actions';

describe('App tests', () => {
  let wrapper;
  let mockFavorite;
  const { mockCleanMovieData, mockUncleanMovies } = mockData;
  beforeEach(() => {
    mockFavorite = jest.fn();
    wrapper = shallow( 
      <Card 
        movie ={mockCleanMovieData}
        favorites={mockUncleanMovies}
        addFavorite={mockFavorite}
        removeFavorite={mockFavorite}
      /> 
    );
  });

  it('renders the Card with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('MapStateToProps', () => {
    const { mockUserData } = mockData;
    it('should have a users data object in props', () => {
      const mockState = {userData: mockUserData};
      const expected = {user: mockUserData};
      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });

    it('should have a favorites data array in props', () => {
      const { mockCleanMoviesDataArray } = mockData;
      const mockState = {userFavorites: mockCleanMoviesDataArray};
      const expected = {favorites: mockCleanMoviesDataArray};
      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });
  });

  describe('MapDispatchToProps', () => {
    let mockDispatch;
    beforeEach(() => {
      mockDispatch = jest.fn();
    });

    it('should dispatch addFavorite when called', () => {
      const { mockCleanMovieData } = mockData;
      const { addFavorite } = actions;
      const mockAction = addFavorite(mockCleanMovieData);
      const props = mapDispatchToProps(mockDispatch);
      props.addFavorite(mockCleanMovieData);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });

    it('should dispatch removeFavorite when called', () => {
      const { mockCleanMovieData } = mockData;
      const { removeFavorite } = actions;
      const mockAction = removeFavorite(mockCleanMovieData);
      const props = mapDispatchToProps(mockDispatch);
      props.removeFavorite(mockCleanMovieData);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });
  });
});
