import React from 'react';

import Logo from '../../common/logo';
import UnderlinedLink from '../../common/underlined-link';
import { Header, Nav } from './styles';
import { navbarData } from '../../../static/fixtures/navbarLinks';

export default function Navbar() {
  return (
    <Header>
      <Logo />
      <Nav>
        {navbarData.map(({ label, to }) => (
          <UnderlinedLink key={label} to={to}>
            {label}
          </UnderlinedLink>
        ))}
      </Nav>
    </Header>
  );
}
