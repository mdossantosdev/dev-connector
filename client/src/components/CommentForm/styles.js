import styled from 'styled-components';

export const FormHeader = styled.div`
  background: var(--primary-color);
  color: #fff;
  padding: 0.5rem;
`;

export const Form = styled.form`
  margin: 1rem 0;

  & > textarea {
    display: block;
    width: 100%;
    padding: 0.4rem;
    font: inherit;
    font-size: 1.2rem;
    border: 1px solid #ccc;
  }
`;

export const Button = styled.input`
  display: inline-block;
  font: inherit;
  background: var(--dark-color);
  color: #fff;
  padding: 0.4rem 1.3rem;
  margin: 1rem 0;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  outline: none;

  &:hover {
    opacity: 0.8;
  }
`;
