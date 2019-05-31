import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 0.3rem solid rgba(0, 0, 0, 0.1);
  border-top: 0.3rem solid #767676;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: ${rotate360} 0.6s linear infinite;
  margin: 0 auto;
`;
