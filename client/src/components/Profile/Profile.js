import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import { BtnBack, BtnEdit } from './styles';

const Profile = ({ getProfileById, profile: { profile, loading }, auth, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Loader />
      ) : (
        <Fragment>
          <BtnBack to='/profiles'>Back To Profiles</BtnBack>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <BtnEdit to='/edit-profile'>Edit Profile</BtnEdit>
            )}
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default Profile;
