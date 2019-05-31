import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import { Title, SubTitle } from './styles';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Loader />
  ) : (
    <Fragment>
      <Title>Dashboard</Title>
      <SubTitle>
        <i className='fas fa-user' /> Welcome {user && user.name}
      </SubTitle>
      {profile !== null ? <Fragment>has</Fragment> : <Fragment>has not</Fragment>}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

export default Dashboard;
