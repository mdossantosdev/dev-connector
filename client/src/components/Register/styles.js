import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #17a2b8;
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  text-align: center;
  margin-bottom: 1.5rem;
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
    outline: 2px solid #17a2b8;
  }
`;

export const SmallText = styled.small`
  display: block;
  padding: 0 0.2rem;
  margin-top: 0.3rem;
  color: #888;
`;

export const BtnRegister = styled.input`
  background-color: #17a2b8;
  color: #fff;
  font-size: 1rem;
  padding: 0.4rem 1.3rem;
  transition: opacity 0.2s ease-in;
  border: none;
  outline: none;
  font: inherit;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
