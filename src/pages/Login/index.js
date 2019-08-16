import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './actions';
import Icon from '@mdi/react';
import { mdiGoogle } from '@mdi/js';
import { 
  Wrapper,
  Title,
  ButtonAuth
} from './style';

const Login = ({history, location}) => {
  const dispatch = useDispatch();
  const isAuthed = useSelector(({loginPage}) => !loginPage.user ? false : !!loginPage.user.email);

  useEffect(() => {
    if( isAuthed ) {
      if( location.state ) {
        history.push(location.state.from.pathname);
      } else {
        history.push("/");
      }
    }
  },[isAuthed]);

  const handleAuthButton = () => {
    dispatch(login());
  };

  return (
    <Wrapper>
      <Title>//Todo <small>List</small></Title>
      <ButtonAuth onClick={handleAuthButton}>
        <Icon path={mdiGoogle}
          size={1}
          color="#FFF" 
        />
      </ButtonAuth>
    </Wrapper>
  )
}

export default Login;