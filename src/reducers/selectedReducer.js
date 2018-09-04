export const selectedReducer = (state = {}, action) => {
  switch (action.type) {
    case 'MANAGE_SELECTED_MOVIE':
      if (state.movie_id) {
        if (state.movie_id === action.movie.movie_id) {
          return {};
        } else {
          return action.movie;
        }
      }
      return action.movie;
    default:
      return state;
  }
};