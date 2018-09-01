export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_USER':
      return { user_id: action.user_id, name: action.name };
    default:
      return state;
  }
};