import React, { useState, useEffect, useRef } from 'react';
import Icon from '@mdi/react';
import { mdiCheckboxBlankOutline, mdiCheckboxMarked } from '@mdi/js';
import {
  GlobalStyles,
  Wrapper,
  Header,
  Title,
  Form,
  Input,
  TodoList,
  TodoListItem,
  TodoListItemCheckboxWrapper,
  TodoListItemContent
} from './App.styles';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addTodo = text => {
    const newTodoItems = [...todoItems];
    newTodoItems.push({
      text,
      checked: false
    });
    setTodoItems(newTodoItems);
  }

  const handleInputChange = event => setInputText(event.target.value);

  const handleFormSubmit = event => {
    event.preventDefault();
    addTodo(inputText);
    setInputText('');
  }

  const toggleCheckItem = index => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].checked = !todoItems[index].checked;
    setTodoItems(newTodoItems);
  }

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header>
          <Title>Todo List</Title>
          <Form onSubmit={handleFormSubmit}>
            <Input
              ref={inputRef}
              value={inputText}
              onChange={handleInputChange}
              placeholder="add a new todo..."
            />
          </Form>
        </Header>
        <TodoList>
          {
            todoItems.map(({checked, text}, index) => (
              <TodoListItem key={index} checked={checked}>
                <TodoListItemCheckboxWrapper onClick={() => toggleCheckItem(index)}>
                  <Icon path={checked ? mdiCheckboxMarked : mdiCheckboxBlankOutline}
                    size={1}
                    color="#ACACAC" 
                  />
                </TodoListItemCheckboxWrapper>
                <TodoListItemContent>{ text }</TodoListItemContent>
              </TodoListItem>
            ))
          }
        </TodoList>
      </Wrapper>
    </>
  )
};

export default App;