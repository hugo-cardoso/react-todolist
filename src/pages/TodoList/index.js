import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '@pages/Login/actions';

import TodoHeader from '@components/TodoHeader';
import TodoList from '@components/TodoList';

import { Wrapper } from './style';

const TodoListPage = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <TodoHeader title="TODO List"/>
      <TodoList />
    </Wrapper>
  )
}

export default TodoListPage;