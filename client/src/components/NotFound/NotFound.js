import React from 'react';
import { Container, Title, SubTitle } from './styles';

const NotFound = () => {
  return (
    <Container>
      <Title>
        <i className='fas fa-exclamation-triangle' /> Page Not Found
      </Title>
      <SubTitle>Sorry, this page does not exist!</SubTitle>
    </Container>
  );
};

export default NotFound;
