import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateInputText,
  clearInputText
} from './actions';
import { addTodo, filterByStatus, setSelectedFilter } from '@components/TodoList/actions';
import { logout } from '@pages/Login/actions';

import Icon from '@mdi/react';
import { mdiLogout, mdiLoading, mdiSend } from '@mdi/js';

import {
  Wrapper,
  Title,
  Form,
  Input,
  Row,
  ButtonLogout,
  Tabs,
  Tab,
  LoadingIcon,
  ButtonSend
} from './style';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(({loginPage}) => loginPage.user);
  const { inputText, isLoading } = useSelector(({ header }) => header);
  const { todos } = useSelector(({ todoList }) => todoList);
  const inputRef = useRef(null);
  const [tabActive, setTabActive] = useState(0);
  const TABS = ['ALL', 'PENDING', 'DONE'];

  const addTodoItem = text => dispatch(addTodo(text));

  const handleInputChange = event => dispatch(updateInputText(event.target.value));

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log(inputText);
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
        <ButtonSend type="submit">
          <Icon path={mdiSend}
            size={1}
            color="#F0002F"
          />
        </ButtonSend>
      </Form>
      <Tabs tabsCount={TABS.length} tabActive={tabActive}>
        {
          TABS.map((tab, index) => (
            <Tab 
              key={tab}
              isActive={tabActive == index}
              onClick={() => handleTabClick(index)}>{ tab }{ tab == 'ALL' && `(${ todos.length })` }</Tab>
          ))
        }
      </Tabs>
    </Wrapper>
  )
};

export default Header;