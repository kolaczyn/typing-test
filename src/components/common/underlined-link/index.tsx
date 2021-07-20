/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import StyledLink, { Label } from './styles';

type Props = {
  href?: string;
  children: React.ReactNode;
  to?: string;
  icon?: string;
  isAlwaysUnderlined?: boolean;
  target?: '_blank';
};

// You can tell it to an icon to render,
// or pass href or to to make it an anchor tag or router's link
// it should work in all 4 combinations (icon or not, link or anchor)
const UnderlinedLink: React.FC<Props> = ({
  href,
  to,
  icon,
  children,
  isAlwaysUnderlined,
  target,
}) => {
  return (
    // @ts-ignore
    <StyledLink
      as={to ? Link : undefined}
      // render it as <Link/> instead of <a/> if needed
      isalwaysunderlined={isAlwaysUnderlined ? true : false}
      href={href}
      to={to}
      target={target}
    >
      {icon ? <i className={icon} /> : null}
      <Label>{children}</Label>
    </StyledLink>
  );
};
export default UnderlinedLink;

UnderlinedLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  icon: PropTypes.string,
  target: PropTypes.oneOf(['_blank']),
  isAlwaysUnderlined: PropTypes.bool,
};

UnderlinedLink.defaultProps = {
  href: '',
  to: '',
  icon: '',
  isAlwaysUnderlined: false,
};
