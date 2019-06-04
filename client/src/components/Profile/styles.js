import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnBack = styled(Link)`
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
`;

export const BtnEdit = styled(Link)`
  display: inline-block;
  background: var(--dark-color);
  color: #fff;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'top top'
    'about about'
    'exp edu'
    'github github';
  grid-gap: 1rem;
  margin: 1rem 0;
`;

export const ExperienceWrapper = styled.div`
  grid-area: exp;
  background: #fff;
  color: #333;
  border: #ccc solid 1px;
  padding: 2rem;

  & > div {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: #ccc 1px dotted;
  }

  & > div:last-child {
    border: none;
  }
`;

export const Title = styled.h2`
  color: var(--primary-color);
  margin-bottom: 1rem;
`;
