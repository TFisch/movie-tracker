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

  it('renders the SignUp with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a default state of email, password, fireRedirect and userName', () => {
    expect(wrapper.state('email')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
    expect(wrapper.state('fireRedirect')).toEqual(false);
    expect(wrapper.state('userName')).toEqual('');
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

  it('should change state when userName input is changed', () => {
    const mockEvent = { target: { value: 'mock', name: 'userName' }, preventDefault: jest.fn() }
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('userName')).toEqual(mockEvent.target.value)
  })


});
