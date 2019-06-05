import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const FormGroup = styled.div`
  margin: 1.2rem 0;
`;

export const FormSelect = styled.select`
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
`;

export const FormText = styled.small`
  display: block;
  margin: 0.3rem 0 0 0.2rem;
  color: #888;
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

export const BtnSocial = styled.button`
  display: inline-block;
  background: var(--light-color);
  color: #333;
  padding: 0.5rem 1.4rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  border: none;
  outline: none;
  transition: opacity 0.2s ease-in;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const FormGroupSocial = styled.div`
  display: flex;
  margin: 1.2rem 0;
`;

export const IconSocial = styled.i`
  width: 4rem;
  padding: 0.5rem;
  color: ${(props) => `var(--${props.color}-color)`};
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
`;
