import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from './actions';

import Icon from '@mdi/react';
import { mdiFormatListBulletedSquare } from '@mdi/js';

import TodoItem from '@components/TodoItem';
import { Wrapper, Placeholder } from './style';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, filteredTodos, filterIsActive, selectedFilter } = useSelector(({todoList}) => todoList);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <Wrapper>
      { 
        (filteredTodos.length && filterIsActive) ? (
          filteredTodos.map(({checked, text, id}, index) => (
            <TodoItem 
              text={text}
              isChecked={checked}
              key={id}
              id={id}
            />
          )).reverse()
        ) : null
      }

      { 
        (todos.length && !filterIsActive) ? (
          todos.map(({checked, text, id}, index) => (
            <TodoItem 
              text={text}
              isChecked={checked}
              key={id}
              id={id}
            />
          )).reverse()
        ) : null
      } 

      {
        ((!todos.length) || (filterIsActive && !filteredTodos.length)) && (
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