import React from 'react';
import { Login } from '../containers/Login';
import { shallow } from 'enzyme';
import * as mockData from '../test/mockData';
import { login } from '../api/apiCalls'

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

  it('has a default state of email, password and fireRedirect property', () => {
    expect(wrapper.state('email')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
    expect(wrapper.state('fireRedirect')).toEqual(false);
  })

  it('should change state when email input is changed', () => {
    const mockEvent = { target: { value: 'mock@mock.com', name: 'email' }, preventDefault: jest.fn() }
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('email')).toEqual(mockEvent.target.value)
  })

  it('should change state when password input is changed', () => {
    const mockEvent = { target: { value: 'mockpassword', name: 'password' }, preventDefault: jest.fn() }
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('password')).toEqual(mockEvent.target.value)
  })

  describe('handleSubmit', () => {
    let wrapper;
    let mockEvent;
    let mockLogin;
    let mockSetActiveUser;
    let mockSetUserFavorites;

    beforeEach(() => {
      mockEvent = { preventDefault: jest.fn(), target: { email: '', password: '' } }
      mockLogin = jest.fn();
      mockSetActiveUser = jest.fn();
      mockSetUserFavorites = jest.fn();

      wrapper = shallow(
        <Login
          user={mockUserData}
          setActiveUser={mockSetActiveUser}
          mockSetUserFavorites={mockSetUserFavorites}
        />
      );
    });

    it.skip('should setActive user when recieving a valid email and password', async () => {
      await wrapper.find('.user-login').simulate('submit', mockEvent)
      expect().toHaveBeenCalled();

    })

  })
});

