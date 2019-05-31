import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';
import Landing from '../Landing';
import Register from '../Register';
import Login from '../Login';
import Alert from '../Alert';
import Dashboard from '../Dashboard';
import PrivateRoute from '../Routing/PrivateRoute';
import CreateProfile from '../CreateProfile';
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
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/create-profile' component={CreateProfile} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
