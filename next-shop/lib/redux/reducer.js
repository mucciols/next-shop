export default function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_USER":
      return [
        ...state,
        {
          user: action.payload,
        },
      ];
    case "REMOVE_USER":
      return state.filter(item => item.user.id !== action.payload.id)
    default:
      return state;
  }
}
