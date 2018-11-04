import { combineReducers } from 'redux';
import { moviesReducer } from '../reducers/moviesReducer';
import { userReducer } from '../reducers/userReducer';
import { favoritesReducer } from '../reducers/favoritesReducer';
import { selectedReducer } from '../reducers/selectedReducer';
import { loginReducer } from '../reducers/loginReducer';


export const rootReducer = combineReducers({
  moviesData: moviesReducer,
  userFavorites: favoritesReducer,
  userData: userReducer,
  selectedMovie: selectedReducer,
  activeLogin: loginReducer

});