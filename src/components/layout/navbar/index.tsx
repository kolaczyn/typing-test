import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Logo from '../../common/logo';
import UnderlinedLink from '../../common/underlined-link';
import { Header, Ul } from './styles';
import {
  persistentLinks,
  loggedOutLinks,
  loggedInLinks,
} from '../../../static/fixtures/navbarLinks';

import AuthContext from '../../../contexts/AuthContext';

const Nav: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...restProps
}) => (
  <nav {...restProps}>
    <Ul>{children}</Ul>
  </nav>
);

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

const Navbar: React.FC = () => {
  const currentUser = useContext(AuthContext)?.currentUser;
  // maybe there is a better way of doing this
  // it looks like JS doesnt' allowing speading with tetrary operator
  const otherLinks = currentUser ? loggedInLinks : loggedOutLinks;
  const links = [...persistentLinks, ...otherLinks];

  return (
    <Header>
      <Logo />
      <Nav>
        {links.map(({ label, to }) => (
          <li key={label}>
            <UnderlinedLink to={to}>{label}</UnderlinedLink>
          </li>
        ))}
      </Nav>
    </Header>
  );
};
export default Navbar;
