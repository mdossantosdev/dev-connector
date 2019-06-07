import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';
import Landing from '../Landing';
import Routes from '../Routing/Routes';
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
          <Switch>
            <Route exact path='/' component={Landing} />
            <Container>
              <Route component={Routes} />
            </Container>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
