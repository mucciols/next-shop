import { createAction, createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from "@/lib/redux/store";

// export const addTask = createAction<{ task: string }>("TASK_ADD");
// //le action sono azioni che si possono fare sullo state
// // export const addTask = (task) => {
// //   return { type: actionTypes.TASK_ADD, payload: { task: task } };
// // };

// export const removeTask = createAction<{ id: number }>("TASK_REMOVE");
// // export const removeTask = (taskId) => {
// //   return { type: actionTypes.TASK_REMOVE, payload: { id: taskId } };
// // };

// export const completedTask = createAction<{ id: number }>("TASK_COMPLETED");
// // export const completedTask = (taskId) => {
// //   return { type: actionTypes.TASK_COMPLETED, payload: { id: taskId } };
// // };

export const fetchToDo = () => async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const task = await response.json();
  //addTask("Task 1");
  store.dispatch(addTask(task.title));
};

//Reducer
let id = 0;

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ task: string }>) => {
      state.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      });
    },
    removeTask: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    completedTask: (state, action: PayloadAction<{ id: number }>) => {
      const task = state.find((t) => t.id === action.payload.id);
      if (task) 
        task.completed = true;
    },
  },
});

export const { addTask, removeTask, completedTask } = tasksSlice.actions;

export default tasksSlice.reducer;




//const initialState: Task[] = [];

// const tasksReducer = createReducer(initialState, (builder) => {
//   builder.addCase(addTask, (state, action) => {
//     state.push({
//       id: ++id,
//       task: action.payload.task,
//       completed: false,
//     });
//   });

//   builder.addCase(removeTask, (state, action) => {
//     return state.filter((task) => task.id !== action.payload.id);
//   });

//   // 3️⃣ Complete Task
//   builder.addCase(completedTask, (state, action) => {
//     const task = state.find((t) => t.id === action.payload.id);
//     if (task) 
//       task.completed = true;
//   });

// });

//export default tasksReducer;


// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case addTask.type:
//       return [
//         ...state,
//         {
//           id: ++id,
//           task: action.payload.task,
//           completed: false,
//         },
//       ];

//     case removeTask.type:
//       return state.filter((task) => task.id !== action.payload.id);

//     case completedTask.type:
//       return state.map((task) =>
//         task.id === action.payload.id ? { ...task, completed: true } : task
//       );
//     default:
//       return state;
//   }
// }
