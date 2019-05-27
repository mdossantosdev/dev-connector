import React from 'react';
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

const Landing = () => {
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
            <BtnRegister>Register</BtnRegister>
            <BtnLogin>Login</BtnLogin>
          </BtnWrapper>
        </LandingInner>
      </DarkOverlay>
    </LandingWrapper>
  );
};

export default Landing;
