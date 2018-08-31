export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [action.movie, ...state];
    default:
      return state;
  }
};