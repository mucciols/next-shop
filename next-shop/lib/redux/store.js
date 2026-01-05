import { legacy_createStore as createStore, combineReducers } from 'redux'

import userLoginreducer from './userLoginReduder/reducer'
import todoListReducer from './todoListReducer/reducer';

const rootReducer = combineReducers({
  userLogin: userLoginreducer,
  toDoList: todoListReducer
});

const store = createStore(rootReducer);

export default store;