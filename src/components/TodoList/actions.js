import store from '@/store';
import { setLoadingStatus } from '@components/TodoHeader/actions';
import firebase from 'firebase';
import database from '@/utils/database';

export const setTodos = todos => ({
  type: 'SET_TODOS',
  todos
});

export const setFilteredTodos = todos => ({
  type: 'SET_FILTERED_TODOS',
  todos
});

export const setFilterIsActive = status => ({
  type: 'SET_FILTER_IS_ACTIVE',
  status
});

export const setSelectedFilter = filter => ({
  type: 'SET_SELECTED_FILTER',
  filter
});

export const getTodos = () => async dispatch => {
  dispatch(setLoadingStatus(true));
  const { email } = store.getState().loginPage.user;
  const ref = database.collection('users').doc(email).collection('todos');
  ref.orderBy('createdAt').onSnapshot(snapshot => {
		const todos = [];
    snapshot.forEach((doc) => {
      const { id } = doc;
      const { text, checked } = doc.data();
      todos.push({id, text, checked});
    });
    dispatch(setTodos(todos));
    dispatch(setLoadingStatus(false));
	});
};

export const addTodo = text => async dispatch => {
  dispatch(setLoadingStatus(true));
  const { email } = store.getState().loginPage.user;
  const ref = database.collection('users').doc(email).collection('todos');
  const createdAt = firebase.firestore.FieldValue.serverTimestamp();
  await ref.add({
    text,
    createdAt,
    checked: false,
  });
  dispatch(updateTodos());
  dispatch(setLoadingStatus(false));
};

export const removeTodo = id => async dispatch => {
  dispatch(setLoadingStatus(true));
  const { email } = store.getState().loginPage.user;
  const ref = database.collection('users').doc(email).collection('todos').doc(id);
  await ref.delete();
  dispatch(updateTodos());
  dispatch(setLoadingStatus(false));
};

export const toggleCheckTodo = id => async dispatch => {
  dispatch(setLoadingStatus(true));
  const { email } = store.getState().loginPage.user;
  const ref = database.collection('users').doc(email).collection('todos').doc(id);
  const todo = await ref.get();
  const { checked } = todo.data();
  ref.update({ checked: !checked });
  dispatch(updateTodos());
  dispatch(setLoadingStatus(false));
};

export const updateTodos = () => async dispatch => {
  dispatch(setLoadingStatus(true));
  const { email } = store.getState().loginPage.user;
  const { selectedFilter } = store.getState().todoList;
  const ref = database.collection('users').doc(email).collection('todos');
  const snapshot = await ref.orderBy('createdAt').get();
  const todos = [];
  snapshot.forEach((doc) => {
    const { id } = doc;
    const { text, checked } = doc.data();
    todos.push({id, text, checked});
  });
  dispatch(setTodos(todos));
  dispatch(filterByStatus(selectedFilter));
  dispatch(setLoadingStatus(false));
};

export const filterByStatus = status => async dispatch => {
  const { todos } = store.getState().todoList;
  if( status == 'ALL' ) {
    dispatch(setFilterIsActive(false));
    return;
  }
  const filteredTodos = todos.filter(todo => todo.checked == (status == 'DONES'));
  dispatch(setFilterIsActive(true));
  dispatch(setFilteredTodos(filteredTodos));
};