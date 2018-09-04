import React from 'react';
import { CardContainer, mapStateToProps } from '../containers/CardContainer';
import { shallow } from 'enzyme';
import * as mockData from '../test/mockData';

describe('CardContainer tests', () => {
  let wrapper;
  const { mockCleanMoviesDataArray } = mockData;
  beforeEach(() => {
    wrapper = shallow( 
      <CardContainer 
        movies={mockCleanMoviesDataArray}
      /> 
    );
  });

  it('renders the Card with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('MapStateToProps', () => {
    it('should have a movies data array in props', () => {
      const { mockCleanMoviesDataArray } = mockData;
      const mockState = {moviesData: mockCleanMoviesDataArray};
      const expected = {movies: mockCleanMoviesDataArray};
      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });
  });
});
