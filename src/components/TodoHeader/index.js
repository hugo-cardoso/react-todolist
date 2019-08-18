import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateInputText,
  clearInputText
} from './actions';
import { addTodo, filterByStatus, setSelectedFilter } from '@components/TodoList/actions';
import { logout } from '@pages/Login/actions';

import Icon from '@mdi/react';
import { mdiLogout, mdiLoading } from '@mdi/js';

import {
  Wrapper,
  Title,
  Form,
  Input,
  Row,
  ButtonLogout,
  Tabs,
  Tab,
  LoadingIcon
} from './style';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(({loginPage}) => loginPage.user);
  const { inputText, isLoading } = useSelector(({ header }) => header);
  const { todos } = useSelector(({ todoList }) => todoList);
  const inputRef = useRef(null);
  const [tabActive, setTabActive] = useState(0);
  const TABS = ['ALL', 'PENDING', 'DONE'];

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

  const handleTabClick = index => {
    const tab = TABS[index];
    setTabActive(index);
    dispatch(setSelectedFilter(tab));
    dispatch(filterByStatus(tab));
  };

  return (
    <Wrapper>
      <Row>
        <Title>//TODO <small>List</small></Title>
        {
          isLoading && (
            <LoadingIcon>
              <Icon path={mdiLoading}
                size={1}
                color="#FFF"
                spin={.7}
              />
            </LoadingIcon>
          )
        }
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
      <Tabs tabsCount={TABS.length} tabActive={tabActive}>
        {
          TABS.map((tab, index) => (
            <Tab key={tab} onClick={() => handleTabClick(index)}>{ tab }{ tab == 'ALL' && `(${ todos.length })` }</Tab>
          ))
        }
      </Tabs>
    </Wrapper>
  )
};

export default Header;