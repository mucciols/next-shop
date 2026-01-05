import * as actionTypes from '@/lib/redux/actionTypes'

//il reducer serve solo a salvare/aggiornare lo stato

//to do list reducer
let id = 0

export default function reducer(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false
        }
      ];

    case actionTypes.REMOVE_TASK:
      return state.filter(task => task.id !== action.payload.id);

    default:
      return state;
  }
}