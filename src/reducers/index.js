import { combineReducers } from 'redux';
import { moviesData } from '../reducers/moviesReducer';

export const rootReducer = combineReducers({
  moviesData
});