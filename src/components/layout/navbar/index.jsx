import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../common/logo';
import UnderlinedLink from '../../common/underlined-link';
import { Header, Ul } from './styles';
import navbarData from '../../../static/fixtures/navbarLinks';

const Nav = ({ children, ...restProps }) => (
  <nav {...restProps}>
    <Ul>
      {children}
    </Ul>
  </nav>
);

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

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
