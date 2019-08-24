import { createGlobalStyle } from 'styled-components';

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
    background-color: #000;
    justify-content: center;
    align-items: center;
  }

  @keyframes enterLeftAnimation {
    0% {
      transform: translateX(-35px);
      opacity: 0;
    }
    
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;