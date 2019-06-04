import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Title, Text } from './styles';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, to, from, description },
}) => {
  return (
    <div>
      <Title>{school}</Title>
      <Text>
        <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
        {!to ? ' Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
      </Text>
      <Text>
        <strong>Degree: </strong> {degree}
      </Text>
      <Text>
        <strong>Field Of Study: </strong> {fieldofstudy}
      </Text>
      <Text>
        <strong>Description: </strong> {description}
      </Text>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
