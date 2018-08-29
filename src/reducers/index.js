import { combineReducers } from 'redux';
import { moviesReducer } from '../reducers/moviesReducer';

export const rootReducer = combineReducers({
  moviesData: moviesReducer
});