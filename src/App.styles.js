import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,body, #app {
    height: 100%;
  }

  body * {
    font: 14px 'Roboto', sans-serif;
    color: #455A64;
    -webkit-font-smoothing: antialiased !important;
  }

  ul, ol {
    list-style: none;
  }

  #app {
    display: flex;
    background-color: #ECEFF1;
    justify-content: center;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  width: 300px;
  border-radius: 4px;
  border: 1px solid #B0BEC5;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: #455A64;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #B0BEC5;
  border-radius: 3px;
  padding: 0 10px;
  color: #616161;
  font-size: 13px;
  font-weight: 500;
`;

export const TodoList = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const TodoListItem = styled.div`
  display: flex;
  height: 50px;
  border-top: 1px solid #CFD8DC;
  ${ ({checked}) => checked && `
      > * {
        opacity: .5;
      }
  ` }
`;

export const TodoListItemCheckboxWrapper = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const TodoListItemContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
`;