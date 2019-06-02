import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import { Title, SubTitle, BtnCreate } from './styles';
import DashboardActions from '../DasboardActions/DashboardActions';
import Experience from '../Experience';
import Education from '../Education/Education';

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
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <BtnCreate to='/create-profile'>Create Profile</BtnCreate>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

export default Dashboard;
