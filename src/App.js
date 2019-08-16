import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkIsLogged } from '@pages/Login/actions';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import TodoList from '@pages/TodoList';
import Login from '@pages/Login';
import PrivateRoute from '@components/PrivateRoute';

import { GlobalStyles } from './App.styles';

const App = () => {
  const dispatch = useDispatch();
  const isAuthed = useSelector(({loginPage}) => !loginPage.user ? false : !!loginPage.user.email);

  useEffect(() => {
    dispatch(checkIsLogged());
  },[]);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <PrivateRoute path="/" component={TodoList} isAuthed={isAuthed} exact />
        <Route path="/login" component={Login} exact/>
        <Route render={() => <Redirect to="/login" />} />
      </BrowserRouter>
    </>
  );
};

export default App;