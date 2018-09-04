import React from 'react';
import { SignUp, mapStateToProps, mapDispatchToProps } from '../containers/SignUp';
import { shallow } from 'enzyme';
import * as mockData from '../test/mockData';
import * as actions from '../actions';

describe('SignUp tests', () => {
  let wrapper;
  let mockFunction;
  const { mockUserData } = mockData;
  beforeEach(() => {
    mockFunction = jest.fn();
    wrapper = shallow(
      <SignUp
        user={mockUserData}
        setActiveUser={mockFunction}
      />
    );
  });

  it('renders the SignUp with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a default state of email, password, fireRedirect and userName', () => {
    expect(wrapper.state('email')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
    expect(wrapper.state('fireRedirect')).toEqual(false);
    expect(wrapper.state('userName')).toEqual('');
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

  it('should change state when userName input is changed', () => {
    const mockEvent = { target: { value: 'mock', name: 'userName' }, preventDefault: jest.fn() };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('userName')).toEqual(mockEvent.target.value);
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
  });
});
