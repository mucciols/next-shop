import * as actionTypes from '@/lib/redux/actionTypes'

//le action sono azioni che si possono fare sullo state
export const addTask = (task) => {
  return { type: actionTypes.ADD_TASK, payload:{ task: task }}
}

export const removeTask = (taskId) => {
  return { type: actionTypes.REMOVE_TASK, payload:{ id: taskId }}
}