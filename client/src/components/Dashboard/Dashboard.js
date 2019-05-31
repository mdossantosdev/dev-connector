import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ getCurrentProfile, auth, profile: { profile } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return <div>Dashboard</div>;
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

export default Dashboard;
