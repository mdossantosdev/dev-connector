import styled from 'styled-components';

export const Card = styled.div`
  grid-area: about;
  text-align: center;
  background: var(--light-color);
  color: #333;
  padding: 2rem;
`;

export const Title = styled.h2`
  color: var(--primary-color);
`;

export const Line = styled.div`
  height: 1px;
  background: #ccc;
  margin: 1.5rem 0;
`;

export const Skills = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Skill = styled.div`
  padding: 0.8rem;
`;
