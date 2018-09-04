import React from 'react';
import { NavBar, mapStateToProps, mapDispatchToProps } from '../containers/NavBar';
import { shallow } from 'enzyme';
import * as mockData from '../test/mockData';
import * as actions from '../actions';

describe('NavBar tests', () => {
  let wrapper;
  let mockFunction;
  const { mockUserData } = mockData;
  beforeEach(() => {
    mockFunction = jest.fn();
    wrapper = shallow( 
      <NavBar 
        user={mockUserData}
        resetTheStore={mockFunction}
      /> 
    );
  });

  it('renders the Card with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
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

    it('should dispatch resetTheStore when called', () => {
      const { resetTheStore } = actions;
      const mockAction = resetTheStore();
      const props = mapDispatchToProps(mockDispatch);
      props.resetTheStore();
      expect(mockDispatch).toBeCalledWith(mockAction);
    });
  });
});
