import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { palette } from '../../styles/palette';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${palette.dark.background};
  padding: 0.7rem 2rem;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  border-bottom: solid 1px var(--primary-color);
  opacity: 0.9;

  @media only screen and (max-width: 700px) {
    display: block;
    text-align: center;
  }
`;

export const NavSection = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 700px) {
    justify-content: center;

    &:first-child {
      margin-bottom: 0.5rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
  margin-left: 0.8rem;
`;

export const Icon = styled.i`
  font-size: 1.5rem;
`;

export const NavItemWrapper = styled.ul`
  display: flex;
`;

export const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  color: ${palette.dark.color};
  margin-right: 1rem;

  &:hover {
    color: var(--primary-color);
  }
`;

export const NavIcon = styled.i`
  margin-right: 0.3rem;
`;

export const HideText = styled.span`
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const Logout = styled.a`
  color: ${palette.dark.color};
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
`;
