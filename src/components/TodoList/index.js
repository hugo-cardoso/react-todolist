import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from './actions';

import Icon from '@mdi/react';
import { mdiFormatListBulletedSquare } from '@mdi/js';

import TodoItem from '@components/TodoItem';
import { Wrapper, Placeholder } from './style';

const TodoList = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector(({todoList}) => todoList.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <Wrapper>
      {
        todoItems.length ?
        (
          todoItems.map(({checked, text, id}, index) => (
            <TodoItem 
              text={text}
              isChecked={checked}
              key={id}
              id={id}
            />
          )).reverse()
        ) : (
          <Placeholder>
            <Icon path={mdiFormatListBulletedSquare}
              size={1}
              color="#FFF" 
            />
          </Placeholder>
        )
      }
    </Wrapper>
  )
};

export default TodoList;