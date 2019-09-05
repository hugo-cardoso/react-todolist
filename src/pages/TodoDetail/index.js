import React, { useState } from 'react';
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
  const [inputDate, setInputDate] = useState(new Date());
  const id = new URLSearchParams(window.location.search).get('id');
  const todo = [...useSelector(({todoList}) => todoList.todos.filter(todo => todo.id === id))][0];

  const removeTodoItem = () => {
    dispatch(removeTodo(id));
    history.push('/');
  };

  const addEvent = async () => {
    const date = new Date(inputDate);
    const event = {
      'summary': `React Todo - ${ id }`,
      'description': todo.text,
      'start': {
        'date': moment(date).format('YYYY-MM-DD'),
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    };
    await gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event
    });
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
        <button onClick={() => addEvent()}>Teste</button>
      </Content>
    </Wrapper>
  )
}

export default TodoDetailPage;