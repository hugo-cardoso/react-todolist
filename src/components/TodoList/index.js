import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLocalStorageTodos } from './actions';

import Icon from '@mdi/react';
import { mdiFormatListBulletedSquare } from '@mdi/js';

import TodoItem from '@components/TodoItem';
import { Wrapper, Placeholder } from './style';

const TodoList = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector(({todoList}) => todoList.todos);

  useEffect(() => {
    dispatch(getLocalStorageTodos());
  }, []);

  return (
    <Wrapper>
      {
        todoItems.length ?
        (
          todoItems.map(({checked, text}, index) => (
            <TodoItem 
              text={text}
              isChecked={checked}
              key={index}
              id={index}
            />
          )).reverse()
        ) : (
          <Placeholder>
            <Icon path={mdiFormatListBulletedSquare}
              size={1}
              color="#ACACAC" 
            />
          </Placeholder>
        )
      }
    </Wrapper>
  )
};

export default TodoList;