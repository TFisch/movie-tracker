export const moviesData = (state=[], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return action.movieData;
    default:
      return state;
  }
};