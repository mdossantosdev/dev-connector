import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #343a40;
  color: #fff;
  padding: 0.7rem 2rem;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  border-bottom: solid 1px #17a2b8;
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
  color: #fff;
  margin: 0 0.5rem;

  &:hover {
    color: #17a2b8;
  }
`;
