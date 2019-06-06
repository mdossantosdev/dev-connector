import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: inline-block;
  background: var(--light-color);
  color: #333;
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
