import { userReducer } from '../reducers/userReducer';
import * as mockData from '../test/mockData';
import * as actions from '../actions';

describe('userReducer', () => {
  const { mockUserData } = mockData;
  const { setActiveUser, resetTheStore } = actions;
  it('should return the default state', () => {
    const expected = {};
    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with a user object when setActiveUser is called', () => {
    expect(userReducer(undefined, setActiveUser(mockUserData))).toEqual(mockUserData);
  });

  it('should return an empty user object when resetTheStore is called', () => {
    expect(userReducer(mockUserData, resetTheStore())).toEqual({});
  });
});
