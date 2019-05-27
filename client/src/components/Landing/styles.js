import styled from 'styled-components';
import background from '../../images/showcase.jpg';

export const LandingWrapper = styled.section`
  position: relative;
  background: url(${background}) no-repeat center center/cover;
  height: 100vh;
`;

export const DarkOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const LandingInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  height: 100%;
  margin: auto;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
`;

export const BtnRegister = styled.div`
  background-color: #17a2b8;
  color: #fff;
  width: 6rem;
  padding: 0.4rem 0;
  font-size: 1rem;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const BtnLogin = styled.div`
  background-color: #f4f4f4;
  color: #333;
  width: 6rem;
  padding: 0.4rem 0;
  font-size: 1rem;
  transition: opacity 0.2s ease-in;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
