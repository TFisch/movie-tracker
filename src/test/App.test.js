import React from 'react';
import { App, mapDispatchToProps } from '../containers/App';
import { shallow } from 'enzyme';
import * as mockData from '../test/mockData';
import { addMovies } from '../actions';

describe('APP tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App addMovies={addMovies} />);
  });

  it('renders the Card with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('fetchOpeningMovies', async () => {
    it.skip('should display the opening movies on load', async () => {
      await wrapper.instance().fetchOpeningMovies();
    });
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;
    beforeEach(() => {
      mockDispatch = jest.fn();
    });

    it('should dispatch addMovies when called', () => {
      const { mockCleanMovieData } = mockData;
      const mockAction = addMovies(mockCleanMovieData);
      const props = mapDispatchToProps(mockDispatch);
      props.addMovies(mockCleanMovieData);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });
  });
});
