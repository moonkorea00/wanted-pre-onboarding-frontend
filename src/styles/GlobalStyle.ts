import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(241, 241, 241);
}

input {
  border: none;
  outline: none;
  cursor: pointer;
}

button {
  border: none;
  cursor: pointer;
}
`;

export default GlobalStyle;
