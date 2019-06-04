import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar, Name, Status, Social, Link } from './styles';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <Card>
      <Avatar src={avatar} alt='Avatar' />
      <Name>{name}</Name>
      <Status>
        {status} {company && <span> at {company}</span>}
      </Status>
      <p>{location && <span>{location}</span>}</p>
      <Social>
        {website && (
          <Link href={website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x' />
          </Link>
        )}
        {social && social.linkedin && (
          <Link href={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin fa-2x' />
          </Link>
        )}
        {social && social.twitter && (
          <Link href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter fa-2x' />
          </Link>
        )}
        {social && social.youtube && (
          <Link href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube fa-2x' />
          </Link>
        )}
        {social && social.instagram && (
          <Link href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram fa-2x' />
          </Link>
        )}
        {social && social.facebook && (
          <Link href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook fa-2x' />
          </Link>
        )}
      </Social>
    </Card>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
