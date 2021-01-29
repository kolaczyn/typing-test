import React from 'react';

import Container from '../ui/Container';
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
    <Container>
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
    </Container>
  )
}
