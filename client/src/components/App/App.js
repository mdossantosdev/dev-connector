import React, { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import Landing from '../Landing/Landing';
import GlobalStyle from '../../styles/globalStyles';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Navbar />
    <Landing />
  </Fragment>
);

export default App;
