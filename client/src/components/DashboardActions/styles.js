import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DashBtn = styled(Link)`
  background: var(--light-color);
  color: #333;
  font-size: 1rem;
  margin-right: 0.5rem;
  padding: 0.4rem 1.3rem;
  border: none;
  transition: opacity 0.2s ease-in;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 700px) {
    display: block;
    width: 100%;
    margin-bottom: 0.3rem;
  }
`;

export const IconBtn = styled.i`
  color: var(--primary-color);
  margin-right: 0.1rem;
`;
