import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Title, Text } from './style';

const ProfileExperience = ({
  experience: { company, title, location, to, from, description },
}) => {
  return (
    <div>
      <Title>{company}</Title>
      <Text>
        <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
        {!to ? ' Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
      </Text>
      <Text>
        <strong>Position: </strong> {title}
      </Text>
      <Text>
        <strong>Location: </strong> {location}
      </Text>
      <Text>
        <strong>Description: </strong> {description}
      </Text>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
