import React from 'react';

import Container from '../../common/Container';
import Logo from '../../common/logo';
import StyledLink from '../../common/StyledLink';
import { Header, Nav } from './styles';
import { navbarData } from '../../../static/fixtures/navbarLinks';

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
