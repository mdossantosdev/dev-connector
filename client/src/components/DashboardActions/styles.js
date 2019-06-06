import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnWrapper = styled.div`
  display: flex;
`;

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
`;

export const IconBtn = styled.i`
  color: var(--primary-color);
  margin-right: 0.1rem;
`;
