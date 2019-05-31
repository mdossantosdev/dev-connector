import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #17a2b8;
    --dark-color: #343a40;
    --light-color: #f4f4f4;
    --danger-color: #dc3545;
    --success-color: #28a745;
    --twitter-color: #38a1f3;
    --facebook-color: #3b5998;
    --instagram-color: #c13584;
    --youtube-color: #c4302b;
    --linkedin-color: #0077b5;
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
