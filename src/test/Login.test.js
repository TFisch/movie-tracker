import React from 'react';
import { Login } from '../containers/Login';
import { shallow } from 'enzyme';
import * as mockData from '../test/mockData';

describe('Login tests', () => {
  let wrapper;
  const { mockUserData } = mockData;
  beforeEach(() => {
    wrapper = shallow( 
      <Login 
        user={mockUserData}
      /> 
    );
  });

  it('renders the Card with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
