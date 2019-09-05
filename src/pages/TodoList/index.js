import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '@pages/Login/actions';

import TodoHeader from '@components/TodoHeader';
import TodoList from '@components/TodoList';

import { Wrapper } from './style';

const TodoListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const events = await gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
      });
      console.log(events);
    })();
  }, []);

  return (
    <Wrapper>
      <TodoHeader title="TODO List"/>
      <TodoList />
    </Wrapper>
  )
}

export default TodoListPage;