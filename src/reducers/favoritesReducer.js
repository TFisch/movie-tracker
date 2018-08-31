export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [action.movie, ...state];
    case 'SET_USER_FAVORITES':
      return action.favorites;
    default:
      return state;
  }
};