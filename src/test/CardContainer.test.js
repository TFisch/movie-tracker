import React from 'react';
import { CardContainer } from '../containers/CardContainer';
import { shallow } from 'enzyme';
import * as mockData from '../test/mockData';

describe('CardContainer tests', () => {
  let wrapper;
  const { mockUncleanMovies } = mockData;
  beforeEach(() => {
    wrapper = shallow( 
      <CardContainer 
        movies={mockUncleanMovies}
      /> 
    );
  });

  it('renders the Card with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
