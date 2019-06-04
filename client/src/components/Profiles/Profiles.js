import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import ProfileItem from '../ProfileItem/ProfileItem';
import { Title, SubTitle } from './styles';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Title>Developers</Title>
          <SubTitle>
            <i className='fab fa-connectdevelop' /> Browse and connect with
            developers
          </SubTitle>
          <div>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

export default Profiles;
