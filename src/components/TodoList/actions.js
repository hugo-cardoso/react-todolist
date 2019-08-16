import store from '@/store';
import firebase from 'firebase';
import database from '@/utils/database';

export const setTodos = todos => ({
  type: 'SET_TODOS',
  todos
});

export const getTodos = () => async dispatch => {
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
	});
};

export const addTodo = text => async dispatch => {
  const { email } = store.getState().loginPage.user;
  const ref = database.collection('users').doc(email).collection('todos');
  const createdAt = firebase.firestore.FieldValue.serverTimestamp();
  await ref.add({
    text,
    createdAt,
    checked: false
  });
  dispatch(updateTodos());
};

export const removeTodo = id => async dispatch => {
  const { email } = store.getState().loginPage.user;
  const ref = database.collection('users').doc(email).collection('todos').doc(id);
  await ref.delete();
  dispatch(updateTodos());
};

export const toggleCheckTodo = id => async dispatch => {
  const { email } = store.getState().loginPage.user;
  const ref = database.collection('users').doc(email).collection('todos').doc(id);
  const todo = await ref.get();
  const { checked } = todo.data();
  ref.update({ checked: !checked });
  dispatch(updateTodos());
};

export const updateTodos = () => async dispatch => {
  const { email } = store.getState().loginPage.user;
  const ref = database.collection('users').doc(email).collection('todos');
  const snapshot = await ref.orderBy('createdAt').get();
  const todos = [];
  snapshot.forEach((doc) => {
    const { id } = doc;
    const { text, checked } = doc.data();
    todos.push({id, text, checked});
  });
  dispatch(setTodos(todos));
};