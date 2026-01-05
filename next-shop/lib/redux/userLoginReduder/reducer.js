import * as actionTypes from '@/lib/redux/actionTypes'

//il reducer serve solo a salvare/aggiornare lo stato

//user login reducer
export default function reducer(state={}, action) {
  switch (action.type) {
    case actionTypes.USER_ADD:
      return action.payload;
    case actionTypes.USER_REMOVE:
      //return state.filter(item => item.user.id !== action.payload.id)
      return {};
      //return null;
    default:
      return state;
  }
}
