import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const FormGroup = styled.div`
  margin: 1.2rem 0;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1rem;
  border: 1px solid #ccc;
`;

export const FormTextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  font: inherit;
  border: 1px solid #ccc;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

export const BtnSubmit = styled.input`
  background: var(--primary-color);
  color: #fff;
  font: inherit;
  padding: 0.4rem 1.3rem;
  margin-right: 1rem;
  font-size: 1rem;
  border: none;
  transition: opacity 0.2s ease-in;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const BtnGoBack = styled(Link)`
  background: var(--light-color);
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  transition: opacity 0.2s ease-in;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
