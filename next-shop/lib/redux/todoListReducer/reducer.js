import * as actionTypes from '@/lib/redux/actionTypes'

//il reducer serve solo a salvare/aggiornare lo stato

//to do list reducer
let id = 0

export default function reducer(state = [], action) {
  switch (action.type) {
    case actionTypes.TASK_ADD:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false
        }
      ];

    case actionTypes.TASK_REMOVE:
      return state.filter(task => task.id !== action.payload.id);
    
    case actionTypes.TASK_COMPLETED:
      return state.map(task => task.id === action.payload.id 
                          ? { ...task, completed: true } 
                          : task );
    default:
      return state;
  }
}