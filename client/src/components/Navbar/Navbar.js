import React from 'react';
import { Nav, NavSection, Icon, Title, NavItemWrapper, NavItem } from './styles';

const Navbar = () => {
  return (
    <Nav>
      <NavSection>
        <NavItem to='/'>
          <Icon>
            <i className='fas fa-code' />
          </Icon>
          <Title>DevConnector</Title>
        </NavItem>
      </NavSection>
      <NavSection>
        <NavItemWrapper>
          <li>
            <NavItem to='/'>Developers</NavItem>
          </li>
          <li>
            <NavItem to='/register'>Register</NavItem>
          </li>
          <li>
            <NavItem to='/login'>Login</NavItem>
          </li>
        </NavItemWrapper>
      </NavSection>
    </Nav>
  );
};

export default Navbar;
