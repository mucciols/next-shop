import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk';

import userLoginreducer from './userLoginReduder/reducer'
import todoListReducer from './todoListReducer/reducer';

const rootReducer = combineReducers({
  userLogin: userLoginreducer,
  toDoList: todoListReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;