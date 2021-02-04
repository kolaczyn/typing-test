import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import StyledLink, { Label } from './styles';

// You can tell it to an icon to render,
// or pass href or to to make it an anchor tag or router's link
// it should work in all 4 combinations (icon or not, link or anchor)
export default function UnderlinedLink({
  href, to, icon, children, isAlwaysUnderlined, ...rest
}) {
  return (
    <StyledLink
      // render it as <Link/> instead of <a/> if needed
      as={to && Link}
      isalwaysunderlined={isAlwaysUnderlined ? 'yes' : ''}
      href={href}
      to={to}
      // rest is mostly for target="_blank" for href
      // TODO maybe I should move href and to into the ...rest
      // or handle this target blank as the props above
      // I don't like it that I have two way of doing things in here
      {...rest}
    >
      {icon && <i className={icon} />}
      <Label>{children}</Label>
    </StyledLink>
  );
}

UnderlinedLink.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  isAlwaysUnderlined: PropTypes.bool,
};

UnderlinedLink.defaultProps = {
  href: '',
  to: '',
  icon: '',
  isAlwaysUnderlined: false,
};
