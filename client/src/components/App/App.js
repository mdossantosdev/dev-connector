import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';
import Landing from '../Landing/Landing';
import Register from '../Register';
import Login from '../Login';
import Alert from '../Alert';
import GlobalStyle from '../../styles/globalStyles';
import { Container } from './styles';

// Redux
import { Provider } from 'react-redux';
import store from '../../store';
import setAuthToken from '../../utils/setAuthToken';
import { loadUser } from '../../actions/auth';

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <GlobalStyle />
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Container>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
