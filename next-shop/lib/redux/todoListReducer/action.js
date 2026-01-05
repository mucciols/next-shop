import * as actionTypes from "@/lib/redux/actionTypes";
import store from "@/lib/redux/store";

//le action sono azioni che si possono fare sullo state
export const addTask = (task) => {
  return { type: actionTypes.TASK_ADD, payload: { task: task } };
};

export const removeTask = (taskId) => {
  return { type: actionTypes.TASK_REMOVE, payload: { id: taskId } };
};

export const completedTask = (taskId) => {
  return { type: actionTypes.TASK_COMPLETED, payload: { id: taskId } };
};

export const fetchToDo = () => async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const task = await response.json();
  addTask("Task 1");
  store.dispatch(addTask(task.title));
};
