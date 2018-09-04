import React from 'react';
import { Login, mapStateToProps, mapDispatchToProps } from '../containers/Login';
import { shallow } from 'enzyme';
import * as mockData from '../test/mockData';
import * as actions from '../actions';

describe('Login tests', () => {
  let wrapper;
  let mockSetActiveUser;
  let mockSetUserFavorites;
  const { mockUserData } = mockData;
  beforeEach(() => {
    mockSetActiveUser = jest.fn();
    mockSetUserFavorites = jest.fn();
    wrapper = shallow(
      <Login
        user={mockUserData}
        setActiveUser={mockSetActiveUser}
        setUserFavorites={mockSetUserFavorites}
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
  });

  it('should change state when email input is changed', () => {
    const mockEvent = { target: { value: 'mock@mock.com', name: 'email' }, preventDefault: jest.fn() };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('email')).toEqual(mockEvent.target.value);
  });

  it('should change state when password input is changed', () => {
    const mockEvent = { target: { value: 'mockpassword', name: 'password' }, preventDefault: jest.fn() };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('password')).toEqual(mockEvent.target.value);
  });

  describe('handleSubmit', () => {
    let mockEvent;
    beforeEach(() => {
      mockEvent = { preventDefault: jest.fn(), target: { email: '', password: '' } };
    });

    it.skip('should setActive user when recieving a valid email and password', async () => {
      await wrapper.find('.user-login').simulate('submit', mockEvent);
      expect().toHaveBeenCalled();
    });
  });

  describe('MapStateToProps', () => {
    const { mockUserData } = mockData;
    it('should have a users data object in props', () => {
      const mockState = {userData: mockUserData};
      const expected = {user: mockUserData};
      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });
  });

  describe('MapDispatchToProps', () => {
    let mockDispatch;
    beforeEach(() => {
      mockDispatch = jest.fn();
    });

    it('should dispatch setActiveUser when called', () => {
      const { mockUserData } = mockData;
      const { setActiveUser } = actions;
      const mockAction = setActiveUser(mockUserData);
      const props = mapDispatchToProps(mockDispatch);
      props.setActiveUser(mockUserData);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });

    it('should dispatch setUserFavorites when called', () => {
      const { mockCleanMoviesDataArray } = mockData;
      const { setUserFavorites } = actions;
      const mockAction = setUserFavorites(mockCleanMoviesDataArray);
      const props = mapDispatchToProps(mockDispatch);
      props.setUserFavorites(mockCleanMoviesDataArray);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });
  });
});
