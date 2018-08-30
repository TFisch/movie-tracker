import { combineReducers } from 'redux';
import { moviesReducer } from '../reducers/moviesReducer';
import { userReducer } from '../reducers/userReducer'

export const rootReducer = combineReducers({
  moviesData: moviesReducer,
  userData: userReducer
});