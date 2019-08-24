import React from 'react';
import moment from 'moment';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiDelete } from '@mdi/js';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '@/components/TodoList/actions';
import { Link } from 'react-router-dom';

import { 
  Wrapper,
  Toolbar,
  ToolbarContent,
  ToolbarActionWrapper,
  ToolbarTitle,
  Content,
  ContentDate
} from './style';

const TodoDetailPage = ({history}) => {
  const dispatch = useDispatch();
  const id = new URLSearchParams(window.location.search).get('id');
  const todo = [...useSelector(({todoList}) => todoList.todos.filter(todo => todo.id === id))][0];

  const removeTodoItem = () => {
    dispatch(removeTodo(id));
    history.push('/');
  };

  return (
    <Wrapper>
      <Toolbar>
        <ToolbarActionWrapper>
          <Link to="/">
            <Icon path={mdiArrowLeft}
              size={1}
              color="#FFF" 
            />
          </Link>
        </ToolbarActionWrapper>
        <ToolbarContent>
          <ToolbarTitle>Details</ToolbarTitle>
        </ToolbarContent>
        <ToolbarActionWrapper onClick={() => removeTodoItem()}>
          <Icon path={mdiDelete}
            size={1}
            color="#FFF" 
          />
        </ToolbarActionWrapper>
      </Toolbar>
      <Content>
        <ContentDate>{ moment(todo.createdAt.seconds * 1000).locale('pt-br').format('YYYY/MM/DD, h:mm A') }</ContentDate>
        { todo.text }
      </Content>
    </Wrapper>
  )
}

export default TodoDetailPage;