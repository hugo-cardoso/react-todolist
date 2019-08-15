import React from 'react';

import Header from '@components/Header';
import TodoList from '@components/TodoList';

import {
  GlobalStyles,
  Wrapper,
} from './App.styles';

const App = () => (
  <>
    <GlobalStyles />
    <Wrapper>
      <Header title="TODO LIST"/>
      <TodoList />
    </Wrapper>
  </>
);

export default App;