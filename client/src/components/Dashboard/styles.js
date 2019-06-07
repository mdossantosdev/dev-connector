import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { palette } from '../../styles/palette';

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--primary-color);

  @media only screen and (max-width: 700px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const BtnCreate = styled(Link)`
  display: inline-block;
  background: ${palette.primary.background};
  color: ${palette.primary.color};
  margin: 1rem 0;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  outline: none;
  transition: opacity 0.2s ease-in;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
`;

export const DeleteBtn = styled.button`
  background: var(--danger-color);
  color: #fff;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border: none;
  outline: none;
  transition: opacity 0.2s ease-in;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
