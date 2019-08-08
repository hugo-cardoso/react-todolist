import React, { useState } from 'react';
import {
  GlobalStyles,
  Wrapper,
  Header,
  Title,
  Form,
  Input
} from './App.styles';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  const addTodo = text => {
    const newTodoItems = todoItems;
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

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header>
          <Title>Todo List</Title>
          <Form onSubmit={handleFormSubmit}>
            <Input
              value={inputText}
              onChange={handleInputChange}
              placeholder="add a new todo..."
            />
          </Form>
        </Header>
      </Wrapper>
    </>
  )
};

export default App;