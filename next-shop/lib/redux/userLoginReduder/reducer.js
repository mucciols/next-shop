//il reducer serve solo a salvare/aggiornare lo stato

//user login reducer
export default function reducer(state={}, action) {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
    case "REMOVE_USER":
      //return state.filter(item => item.user.id !== action.payload.id)
      return {};
      //return null;
    default:
      return state;
  }
}
