import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../Register';
import Login from '../Login';
import Alert from '../Alert';
import Dashboard from '../Dashboard';
import CreateProfile from '../CreateProfile';
import EditProfile from '../EditProfile';
import AddExperience from '../AddExperience';
import AddEducation from '../AddEducation';
import Profiles from '../Profiles';
import Profile from '../Profile';
import Posts from '../Posts';
import Post from '../Post';
import NotFound from '../NotFound';
import PrivateRoute from '../Routing/PrivateRoute';

const Routes = () => {
  return (
    <Fragment>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/add-experience' component={AddExperience} />
        <PrivateRoute exact path='/add-education' component={AddEducation} />
        <PrivateRoute exact path='/posts' component={Posts} />
        <PrivateRoute exact path='/posts/:id' component={Post} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
