import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    font-size: 14px;
    background-color: white;
  }

  #root {
    min-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`;

export default GlobalStyle;
