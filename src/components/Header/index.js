import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateInputText,
  clearInputText
} from './actions';
import { addTodo } from '@components/TodoList/actions';

import {
  Wrapper,
  Title,
  Form,
  Input
} from './style';

const Header = ({title}) => {
  const dispatch = useDispatch();
  const inputText = useSelector(({ header }) => header.inputText);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  },[])

  const addTodoItem = text => dispatch(addTodo(text));

  const handleInputChange = event => dispatch(updateInputText(event.target.value));

  const handleFormSubmit = event => {
    event.preventDefault();
    addTodoItem(inputText);
    dispatch(clearInputText());
  }

  return (
    <Wrapper>
      <Title>{ title }</Title>
      <Form onSubmit={handleFormSubmit}>
        <Input
          ref={inputRef}
          value={inputText}
          onChange={handleInputChange}
          placeholder="add a new todo..."
          required
        />
      </Form>
    </Wrapper>
  )
};

export default Header;