import React from 'react';
import { Nav, NavSection, Icon, Title, NavItemWrapper, NavItem } from './styles';

const Navbar = () => {
  return (
    <Nav>
      <NavSection>
        <Icon>
          <i className='fas fa-code' />
        </Icon>
        <Title>DevConnector</Title>
      </NavSection>
      <NavSection>
        <NavItemWrapper>
          <li>
            <NavItem href='/'>Developers</NavItem>
          </li>
          <li>
            <NavItem href='/'>Register</NavItem>
          </li>
          <li>
            <NavItem href='/'>Login</NavItem>
          </li>
        </NavItemWrapper>
      </NavSection>
    </Nav>
  );
};

export default Navbar;
