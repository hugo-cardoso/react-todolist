import store from '@/store';

export const setTodos = todos => ({
  type: 'SET_TODOS',
  todos
});

const setLocalStorageTodos = todos => window.localStorage.setItem('react-todolist', JSON.stringify(todos));

export const addTodo = text => dispatch => {
  const todos = [...store.getState().todoList.todos];
  todos.push({
    text,
    checked: false
  });
  setLocalStorageTodos(todos);
  dispatch(setTodos(todos));
};

export const removeTodo = index => dispatch => {
  const todos = [...store.getState().todoList.todos];
  todos.splice(index, 1);
  setLocalStorageTodos(todos);
  dispatch(setTodos(todos));
};

export const toggleCheckTodo = index => dispatch => {
  const todos = [...store.getState().todoList.todos];
  todos[index].checked = !todos[index].checked;
  setLocalStorageTodos(todos);
  dispatch(setTodos(todos));
};

export const getLocalStorageTodos = () => async dispatch => {
  const storagedTodos = await window.localStorage.getItem('react-todolist');
  if( storagedTodos ) dispatch(setTodos(JSON.parse(storagedTodos)));
};