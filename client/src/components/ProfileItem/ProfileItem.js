import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar, BtnProfile, Item, Space } from './styles';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <Card>
      <Avatar src={avatar} alt='Avatar' />
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span>at {company}</span>}
        </p>
        <Space />
        <p>{location && <span>{location}</span>}</p>
        <Space />
        <BtnProfile to={`/profile/${_id}`}>View Profile</BtnProfile>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <Item key={index}>
            <i className='fas fa-check' /> {skill}
          </Item>
        ))}
      </ul>
    </Card>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
