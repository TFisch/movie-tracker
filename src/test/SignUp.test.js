import React from 'react';
import { SignUp } from '../containers/SignUp';
import { shallow } from 'enzyme';
import * as mockData from '../test/mockData';

describe('SignUp tests', () => {
  let wrapper;
  const { mockUserData } = mockData;
  beforeEach(() => {
    wrapper = shallow( 
      <SignUp 
        user={mockUserData}
      /> 
    );
  });

  it('renders the Card with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
