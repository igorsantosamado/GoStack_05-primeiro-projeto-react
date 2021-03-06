import { createGlobalStyle } from 'styled-components';

import fundo from '../assets/fundo.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #f0f0f5 url(${fundo}) no-repeat 70% top;
    --webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
    font-smooth: auto;
  }
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
  button {
    cursor: pointer;
  }
  `;
