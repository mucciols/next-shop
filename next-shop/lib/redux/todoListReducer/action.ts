import { createAction } from "@reduxjs/toolkit";
import store from "@/lib/redux/store";

export const addTask = createAction<{ task: string }>("TASK_ADD");
//le action sono azioni che si possono fare sullo state
// export const addTask = (task) => {
//   return { type: actionTypes.TASK_ADD, payload: { task: task } };
// };

export const removeTask = createAction<{ id: number }>("TASK_REMOVE");
// export const removeTask = (taskId) => {
//   return { type: actionTypes.TASK_REMOVE, payload: { id: taskId } };
// };

export const completedTask = createAction<{ id: number }>("TASK_COMPLETED");
// export const completedTask = (taskId) => {
//   return { type: actionTypes.TASK_COMPLETED, payload: { id: taskId } };
// };

export const fetchToDo = () => async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const task = await response.json();
  //addTask("Task 1");
  store.dispatch(addTask(task.title));
};

//to do list reducer
let id = 0;

export default function reducer(state = [], action) {
    
  switch (action.type) {
    case addTask.type:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ];

    case removeTask.type:
      return state.filter((task) => task.id !== action.payload.id);

    case completedTask.type:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, completed: true } : task
      );
    default:
      return state;
  }
}
