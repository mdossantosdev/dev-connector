import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #17a2b8;
    --dark-color: #343a40;
    --light-color: #f4f4f4;
    --danger-color: #dc3545;
    --success-color: #28a745;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    background-color: #fff;
    color: #333;
  }

  a {
    color: #17a2b8;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    width: 100%;
  }
`;

export default GlobalStyle;
