import React from 'react';

import Logo from '../logo';
import StyledLink from '../ui/StyledLink';
import { Header, Nav } from './styles';

const NavLink = ({ children, ...restProps }) => {
  return (
    <li>
      <StyledLink {...restProps}>
        {children}
      </StyledLink>
    </li>
  );
}

const navbarData = [
  { label: 'play now', link: '/' },
  { label: 'ranking', link: '/ranking' },
  { label: 'settings', link: '/settings' },
];

export default function Navbar() {
  return (
    <Header>
      <Logo />
      <Nav>
        {navbarData.map(({ label, link, ...rest }) => (
          <NavLink
            key={label}
            to={link}
            {...rest}
          >
            {label}
          </NavLink>))}
      </Nav>
    </Header>
  )
}
