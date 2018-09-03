import React from 'react';
import { NavBar } from '../containers/NavBar';
import { shallow } from 'enzyme';
import * as mockData from '../test/mockData';

describe('NavBar tests', () => {
  let wrapper;
  const { mockUserData } = mockData;
  beforeEach(() => {
    wrapper = shallow( 
      <NavBar 
        user={mockUserData}
      /> 
    );
  });

  it('renders the Card with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
