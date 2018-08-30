export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_USER':
      return { id: action.id, name: action.name }
    default:
      return state;
  }
}