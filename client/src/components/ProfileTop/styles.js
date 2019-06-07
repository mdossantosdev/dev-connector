import styled from 'styled-components';

export const Card = styled.div`
  grid-area: top;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--primary-color);
  color: #fff;
  padding: 2rem;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 15rem;
  margin: 1rem 0;

  @media only screen and (max-width: 700px) {
    width: 150px;
    margin: auto;
  }
`;

export const Name = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media only screen and (max-width: 700px) {
    font-size: 2rem;
  }
`;

export const Status = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const Social = styled.div`
  margin: 1rem 0;
`;

export const Link = styled.a`
  color: #fff;
  margin: 0 0.3rem;

  &:hover {
    color: var(--dark-color);
  }
`;
