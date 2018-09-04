import React from 'react';
import { mapStateToProps, SelectedContainer } from '../containers/SelectedContainer';
import { mockSelectedMovie } from '../test/mockData'
import { shallow } from 'enzyme';

describe('FavoriteContainer tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SelectedContainer selectedMovie={mockSelectedMovie}
      />
    );
  });

  it('renders the Card with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('MapStateToProps', () => {
    it('should have a selectedMovie in props', () => {
      const mockState = { selectedMovie: mockSelectedMovie };
      const expected = { selectedMovie: mockSelectedMovie };
      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });
  });
});

