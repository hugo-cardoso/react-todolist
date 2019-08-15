import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #app {
    height: 100%;
  }

  body {
    overflow: hidden;
  }

  body * {
    font: 14px 'Roboto', sans-serif;
    color: #455A64;
    -webkit-font-smoothing: antialiased !important;
    overflow: hidden;
  }

  ul, ol {
    list-style: none;
  }

  #app {
    max-height: 100vh;
    overflow-y: hidden;
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

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    border: 0;
  }

  @media screen and (min-width: 768px) {
    max-height: 700px;
  }
`;

export const Header = styled.div`
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #CFD8DC;
  
  @media screen and (min-width: 768px) {
    flex: 0 0;
  }
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
  appearance: none;

  @media screen and (max-width: 768px) {
    height: 40px;
    font-size: 16px;
  }
`;

export const TodoList = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #EEEEEE;
`;

export const TodoListItem = styled.div`
  display: flex;
  height: 50px;
  min-height: 50px;
  border-bottom: 1px solid #EEEEEE;
  background-color: #FFF;
  ${ ({checked}) => checked && `
      > * {
        opacity: .5;
      }
  ` };

  :first-child {border-top: 0;}
`;

export const TodoListItemActionWrapper = styled.div`
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

export const TodoListPlaceholder = styled.div`
  width: 100%;
  min-height: 150px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;