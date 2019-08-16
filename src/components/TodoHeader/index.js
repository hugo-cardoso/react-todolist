import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateInputText,
  clearInputText
} from './actions';
import { addTodo } from '@components/TodoList/actions';
import { logout } from '@pages/Login/actions';

import Icon from '@mdi/react';
import { mdiLogout } from '@mdi/js';

import {
  Wrapper,
  Title,
  Form,
  Input,
  Row,
  ButtonLogout
} from './style';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(({loginPage}) => loginPage.user);
  const inputText = useSelector(({ header }) => header.inputText);
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 1000);
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
      <Row>
        <Title>//TODO <small>List</small></Title>
        <ButtonLogout onClick={() => dispatch(logout())}>
          <Icon path={mdiLogout}
            size={1}
            color="#FFF" 
          />
        </ButtonLogout>
      </Row>
      <Form onSubmit={handleFormSubmit}>
        <Input
          ref={inputRef}
          value={inputText}
          onChange={handleInputChange}
          placeholder={ `add a new todo ${ user.displayName.split(" ")[0] }...` }
          required
        />
      </Form>
    </Wrapper>
  )
};

export default Header;