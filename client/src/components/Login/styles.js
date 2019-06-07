import styled from 'styled-components';
import { palette } from '../../styles/palette';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

export const Form = styled.form`
  width: 50%;
  text-align: center;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 700px) {
    width: 90%;
  }
`;

export const FormGroup = styled.div`
  margin: 1.5rem 0;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;

  &:focus {
    outline: 2px solid var(--primary-color);
  }
`;

export const BtnLogin = styled.input`
  background-color: ${palette.primary.background};
  color: ${palette.primary.color};
  font-size: 1rem;
  width: 6rem;
  padding: 0.4rem 0;
  transition: opacity 0.2s ease-in;
  border: none;
  outline: none;
  font: inherit;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
