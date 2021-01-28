import React, { createElement } from 'react'

import { Header, Nav } from './styles';
import Logo from '../logo';

import StyledLink from '../ui/StyledLink';

const NavLink = ({ children, ...restProps }) => {
  return (
    <li>
      <StyledLink {...restProps}>
        {children}
      </StyledLink>
    </li>
  );

}

export default function Navbar() {
  return (
    <Header>
      <Logo />
      <Nav>
        <NavLink to="/">
          test
        </NavLink>
        <NavLink to="/ranking">
          ranking
        </NavLink>
        <NavLink to="/about">
          about
          </NavLink>
        <NavLink to="/github" target="_blank">
          github
          </NavLink>
      </Nav>
    </Header>
  )
}
