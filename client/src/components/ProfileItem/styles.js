import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 2fr;
  align-items: center;
  grid-gap: 2rem;
  padding: 1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
  background: var(--light-color);

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    text-align: center;

    & > ul {
      display: none;
    }
  }
`;

export const Avatar = styled.img`
  width: 100%;
  border-radius: 50%;

  @media only screen and (max-width: 700px) {
    width: 150px;
    margin: auto;
  }
`;

export const BtnProfile = styled(Link)`
  display: inline-block;
  background: var(--primary-color);
  color: #fff;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const Item = styled.li`
  color: var(--primary-color);
`;

export const Space = styled.div`
  margin: 0.5rem 0;
`;
