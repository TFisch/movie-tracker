export const userReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_ACTIVE_USER':
      return { user_id: action.user_id, name: action.name };
    case 'RESET_THE_STORE':
      return {};
    default:
      return state;
  }
};