import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Landing from '../Landing/Landing';
import Register from '../Register/Register';
import Login from '../Login/Login';
import GlobalStyle from '../../styles/globalStyles';
import { Container } from './styles';

const App = () => (
  <Router>
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Container>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Container>
    </Fragment>
  </Router>
);

export default App;
