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

    it('should setActive user when recieving a valid email and password', () => {
      wrapper.find('.user-login').simulate('submit', mockEvent)
      expect(mockLogin).toHaveBeenCalled();

    })

  })
});

