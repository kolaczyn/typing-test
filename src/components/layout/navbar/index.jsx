import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Logo from '../../common/logo';
import UnderlinedLink from '../../common/underlined-link';
import { Header, Ul } from './styles';
import { persistentLinks, loggedOutLinks, loggedInLinks } from '../../../static/fixtures/navbarLinks';

import AuthContext from '../../../contexts/AuthContext';

// import app from '../../../firebase';

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
  const { currentUser } = useContext(AuthContext);
  // maybe there is a better way of doing this
  // it looks like JS doesnt' allowing speading with tetrary operator
  const otherLinks = currentUser ? loggedInLinks : loggedOutLinks;
  const links = [...persistentLinks, ...otherLinks];

  return (
    <Header>
      <Logo />
      <Nav>
        {links.map(({ label, to }) => (
          <UnderlinedLink key={label} to={to}>
            {label}
          </UnderlinedLink>
        ))}
      </Nav>
    </Header>
  );
}
