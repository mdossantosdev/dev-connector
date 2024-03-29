import styled from 'styled-components';

export const Title = styled.h2`
  margin: 2rem 0;
`;

export const Th = styled.th`
  padding: 1rem;
  text-align: left;
  background: var(--light-color);

  @media only screen and (max-width: 700px) {
    &:nth-child(2) {
      display: none;
    }
  }
`;

export const Td = styled.td`
  padding: 1rem;
  text-align: left;

  @media only screen and (max-width: 700px) {
    &:nth-child(2) {
      display: none;
    }
  }
`;

export const BtnDelete = styled.button`
  display: inline-block;
  background: var(--danger-color);
  color: #fff;
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
