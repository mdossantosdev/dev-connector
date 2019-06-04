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
`;

export const Avatar = styled.img`
  width: 100%;
  border-radius: 50%;
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
`;

export const Item = styled.li`
  color: var(--primary-color);
`;

export const Space = styled.div`
  margin: 0.5rem 0;
`;
