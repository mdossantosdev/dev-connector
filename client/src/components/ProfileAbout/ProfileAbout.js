import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Title, Line, Skills, Skill } from './styles';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <Card>
      {bio && (
        <Fragment>
          <Title>{name.trim().split(' ')[0]}'s Bio</Title>
          <p>{bio}</p>
          <Line />
        </Fragment>
      )}
      <Title>Skill Set</Title>
      <Skills>
        {skills.map((skill, index) => (
          <Skill key={index}>
            <i className='fas fa-check' /> {skill}
          </Skill>
        ))}
      </Skills>
    </Card>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
