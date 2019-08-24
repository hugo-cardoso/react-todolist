import React from 'react';
import Icon from '@mdi/react';
import { mdiCheckboxBlankOutline, mdiCheckboxMarked, mdiMenuRight } from '@mdi/js';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleCheckTodo } from '@components/TodoList/actions';
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
      <ActionWrapper>
        <Link
          to={{
            pathname: '/tododetail',
            search: `?id=${ id }`
          }}
        >
          <Icon path={mdiMenuRight}
            size={1}
            color="#FFF" 
          />
        </Link>
      </ActionWrapper>
    </Wrapper>
  )
};

export default TodoItem;