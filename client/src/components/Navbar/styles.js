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
`;

export const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
  margin-left: 1rem;
`;

export const Icon = styled.div`
  font-size: 1.5rem;
`;

export const NavItemWrapper = styled.ul`
  display: flex;
`;

export const NavItem = styled(Link)`
  display: flex;
  color: ${palette.dark.color};
  margin: 0 0.5rem;

  &:hover {
    color: var(--primary-color);
  }
`;
