import React from 'react';
import { Card } from '../containers/Card';
import { shallow } from 'enzyme';
import * as mockData from '../test/mockData';

describe('App tests', () => {
  let wrapper;
  const { mockCleanMovieData, mockUncleanMovies } = mockData;

  beforeEach(() => {
    wrapper = shallow( 
      <Card 
        movie ={mockCleanMovieData}
        favorites={mockUncleanMovies}
      /> 
    );
  });

  it('renders the Card with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
