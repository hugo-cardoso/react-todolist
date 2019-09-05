import React, { useState } from 'react';
import moment from 'moment';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiDelete, mdiAlarmPlus   } from '@mdi/js';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '@/components/TodoList/actions';
import { Link } from 'react-router-dom';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import * as calendarService from '@/services/calendarService';

import { 
  Wrapper,
  Toolbar,
  ToolbarContent,
  ToolbarActionWrapper,
  ToolbarTitle,
  Content,
  ContentDate,
  FloatButton
} from './style';

const pickerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#F0002F'
    }
  }
});

const TodoDetailPage = ({history}) => {
  const dispatch = useDispatch();
  const [inputDate, setInputDate] = useState(new Date());
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);
  const id = new URLSearchParams(window.location.search).get('id');
  const todo = [...useSelector(({todoList}) => todoList.todos.filter(todo => todo.id === id))][0];

  const removeTodoItem = () => {
    dispatch(removeTodo(id));
    history.push('/');
  };

  const addEvent = async (date) => {
    const event = await calendarService.addEvent(
      `React Todo - ${ id }`,
      todo.text,
      date,
      date
    );
    if( event ) alert('Event Added!');
  };
  
  const handleChangePicker = date => {
    setInputDate(date);
    addEvent(date);
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
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <ThemeProvider theme={pickerTheme}>
          <DateTimePicker 
            value={inputDate} 
            onChange={date => handleChangePicker(date)}
            open={datePickerIsOpen}
            onOpen={() => setDatePickerIsOpen(true)}
            onClose={() => setDatePickerIsOpen(false)}
            ampm={false}
            hideTabs
            disablePast
          />
        </ThemeProvider>
      </MuiPickersUtilsProvider>
      <FloatButton onClick={() => setDatePickerIsOpen(true)}>
        <Icon path={mdiAlarmPlus }
          size={1}
          color="#FFF" 
        />
      </FloatButton>
    </Wrapper>
  )
}

export default TodoDetailPage;