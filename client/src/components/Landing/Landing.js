import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  LandingWrapper,
  DarkOverlay,
  LandingInner,
  Title,
  Text,
  BtnWrapper,
  BtnRegister,
  BtnLogin,
} from './styles';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <LandingWrapper>
      <DarkOverlay>
        <LandingInner>
          <Title>Developer Connector</Title>
          <Text>
            Create a developer profile/portfolio, share posts and get help from other
            developers
          </Text>
          <BtnWrapper>
            <BtnRegister to='/register'>Register</BtnRegister>
            <BtnLogin to='/login'>Login</BtnLogin>
          </BtnWrapper>
        </LandingInner>
      </DarkOverlay>
    </LandingWrapper>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default Landing;
