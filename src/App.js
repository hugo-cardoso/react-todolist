import React, { useState, useEffect, useRef } from 'react';
import Icon from '@mdi/react';
import { mdiCheckboxBlankOutline, mdiCheckboxMarked, mdiClose, mdiFormatListBulletedSquare } from '@mdi/js';
import {
  GlobalStyles,
  Wrapper,
  Header,
  Title,
  Form,
  Input,
  TodoList,
  TodoListItem,
  TodoListItemActionWrapper,
  TodoListItemContent,
  TodoListPlaceholder
} from './App.styles';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    getLocalStorageTodos();
  }, []);

  const addTodo = text => {
    const newTodoItems = [...todoItems];
    newTodoItems.push({
      text,
      checked: false
    });
    setTodoItems(newTodoItems);
    updateLocalStorageTodos(newTodoItems);
  }

  const removeTodo = index => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
    updateLocalStorageTodos(newTodoItems);
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
    updateLocalStorageTodos(newTodoItems);
  }

  const getLocalStorageTodos = () => {
    const storagedTodos = window.localStorage.getItem('react-todolist');
    if( storagedTodos ) setTodoItems(JSON.parse(storagedTodos));
  }

  const updateLocalStorageTodos = todos => window.localStorage.setItem('react-todolist', JSON.stringify(todos));

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
        
          {
            todoItems.length ? (
              <TodoList>
                {
                  todoItems.map(({checked, text}, index) => (
                    <TodoListItem key={index} checked={checked}>
                      <TodoListItemActionWrapper onClick={() => toggleCheckItem(index)}>
                        <Icon path={checked ? mdiCheckboxMarked : mdiCheckboxBlankOutline}
                          size={1}
                          color="#ACACAC" 
                        />
                      </TodoListItemActionWrapper>
                      <TodoListItemContent>{ text }</TodoListItemContent>
                      <TodoListItemActionWrapper onClick={() => removeTodo(index)}>
                        <Icon path={mdiClose}
                          size={1}
                          color="#ACACAC" 
                        />
                      </TodoListItemActionWrapper>
                    </TodoListItem>
                  ))
                }
              </TodoList>
            ) : (
              <TodoListPlaceholder>
                <Icon path={mdiFormatListBulletedSquare}
                  size={1}
                  color="#ACACAC" 
                />
              </TodoListPlaceholder>
            )
          }
      </Wrapper>
    </>
  )
};

export default App;