import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import ProfileTop from '../ProfileTop/ProfileTop';
import ProfileAbout from '../ProfileAbout/ProfileAbout';
import ProfileExperience from '../ProfileExperience/ProfileExperience';
import { BtnBack, BtnEdit, Grid, ExperienceWrapper, Title } from './styles';

const Profile = ({ getProfileById, profile: { profile, loading }, auth, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

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

          <Grid>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <ExperienceWrapper>
              <Title>Experience</Title>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </ExperienceWrapper>
          </Grid>
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
