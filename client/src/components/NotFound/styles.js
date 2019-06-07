import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--primary-color);

  @media only screen and (max-width: 700px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media only screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;
