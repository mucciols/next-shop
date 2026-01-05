import { combineReducers, compose  } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import userLoginreducer from './userLoginReduder/reducer'
import tasksReducer from './todoListReducer/action';

// compose ehnancers server per React DevTools
// nel caso non venga usato, toglierlo anche dal create store
// e generare il createStore semplicemente cosi
// const store = createStore(rootReducer, 
//     applyMiddleware(thunk),
// );

// const composeEnhancers =
//   typeof window !== 'undefined' &&
//   (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose;


const rootReducer = combineReducers({
  toDoList: tasksReducer,
  userLogin: userLoginreducer,
});

// const store = createStore(rootReducer, 
//   composeEnhancers(applyMiddleware(thunk)),
// );

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(/* altri middleware */),
});

export default store;