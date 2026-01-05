import * as actionTypes from '@/lib/redux/actionTypes'

//il reducer serve solo a salvare/aggiornare lo stato

//user login reducer
export default function reducer(state={}, action) {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return action.payload;
    case actionTypes.REMOVE_USER:
      //return state.filter(item => item.user.id !== action.payload.id)
      return {};
      //return null;
    default:
      return state;
  }
}
