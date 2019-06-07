import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  NavSection,
  Icon,
  Title,
  NavItemWrapper,
  NavItem,
  NavIcon,
  HideText,
  Logout,
} from './styles';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <NavItemWrapper>
      <li>
        <NavItem to='/profiles'>Developers</NavItem>
      </li>
      <li>
        <NavItem to='/posts'>Posts</NavItem>
      </li>
      <li>
        <NavItem to='/dashboard'>
          <NavIcon className='fas fa-user' />
          <HideText>Dashboard</HideText>
        </NavItem>
      </li>
      <li>
        <Logout onClick={logout}>
          <NavIcon className='fas fa-sign-out-alt' />
          <HideText>Logout</HideText>
        </Logout>
      </li>
    </NavItemWrapper>
  );

  const guestLinks = (
    <NavItemWrapper>
      <li>
        <NavItem to='/profiles'>Developers</NavItem>
      </li>
      <li>
        <NavItem to='/register'>Register</NavItem>
      </li>
      <li>
        <NavItem to='/login'>Login</NavItem>
      </li>
    </NavItemWrapper>
  );

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
        {!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
      </NavSection>
    </Nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default Navbar;
