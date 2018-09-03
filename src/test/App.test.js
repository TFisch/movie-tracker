import React from 'react';
import { mapDispatchToProps } from '../containers/App';
import { App } from '../containers/App';
import { shallow } from 'enzyme';
import { mockFullData } from '../test/mockData'
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
    it('should display the opening movies on load', async () => {
      // await wrapper.instance().fetchOpeningMovies();

    });
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with the addMovies action when fetchOpeningMovies is called', async () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = addMovies(mockFullData);
      const mappedProps = mapDispatchToProps(mockDispatch);
      // mappedProps.fetchOpeningMovies();
      await wrapper.instance().fetchOpeningMovies();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
});
