import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import header from '@components/TodoHeader/reducer';
import todoList from '@components/TodoList/reducer';
import loginPage from '@pages/Login/reducer';

const store = createStore(combineReducers({
  header,
  todoList,
  loginPage
}), applyMiddleware(thunk));

export default store;