import React from 'react';
import Icon from '@mdi/react';
import { mdiCheckboxBlankOutline, mdiCheckboxMarked, mdiClose } from '@mdi/js';
import { useDispatch } from 'react-redux';
import {
  removeTodo,
  toggleCheckTodo
} from '@components/TodoList/actions';
import {
  Wrapper,
  ActionWrapper,
  Content,
  Text
} from './style';

const TodoItem = ({
  text,
  isChecked,
  id
}) => {
  const dispatch = useDispatch();
  return (
    <Wrapper checked={isChecked}>
      <ActionWrapper onClick={() => dispatch(toggleCheckTodo(id))}>
        <Icon path={isChecked ? mdiCheckboxMarked : mdiCheckboxBlankOutline}
          size={1}
          color="#FFF" 
        />
      </ActionWrapper>
      <Content>
        <Text>{ text }</Text>
      </Content>
      <ActionWrapper onClick={() => dispatch(removeTodo(id))}>
        <Icon path={mdiClose}
          size={1}
          color="#F0002F" 
        />
      </ActionWrapper>
    </Wrapper>
  )
};

export default TodoItem;