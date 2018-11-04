export const loginReducer = (state = false, action) => {
  switch (action.type) {
    case 'TRIGGER_LOGIN':
      return action.status;
    default:
      return state;
  }
};