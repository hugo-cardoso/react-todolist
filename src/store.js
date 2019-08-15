import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import header from '@components/Header/reducer';
import todoList from '@components/TodoList/reducer';

const store = createStore(combineReducers({
  header,
  todoList
}), applyMiddleware(thunk));

export default store;