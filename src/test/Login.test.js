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

  describe('handleSubmit', () => {
    let wrapper;
    let mockEvent;

    beforeEach(() => {
      wrapper = shallow(
        <Login
          user={mockUserData}
        />
        mockEvent = { preventDefault: jest.fn(), target: { email: '', password: '' } }
      );
    });

    it('should setActive user when recieving a valid email and password', () => {
      wrapper.find('.user-login').simulate('submit', mockEvent)

    })

  })
});

