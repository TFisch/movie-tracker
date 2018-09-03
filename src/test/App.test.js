import React from 'react';
import { mapDispatchToProps } from '../containers/App';
import { App } from '../containers/App';
import { shallow } from 'enzyme';
import { mockFullData, mockCleanMoviesDataArray, mockCleanMovieData } from '../test/mockData'
import { addMovies } from '../actions'

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
  })

  describe('mapDispatchToProps', () => {
    it.skip('calls dispatch with the addMovies action when fetchOpeningMovies is called', async () => {
      const mockDispatch = jest.fn()
      const mockMovieData = mockCleanMovieData
      const mappedProps = mapDispatchToProps(mockDispatch);
      const expected = mappedProps.addMovies(mockCleanMovieData);
      const result = mockCleanMovieData
      expect(mappedProps).toHaveBeenCalledWith(expected);
    })
  })
});
