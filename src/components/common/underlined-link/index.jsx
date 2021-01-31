import React from 'react';
import { Link } from 'react-router-dom';

import StyledLink from './styles';

// You can tell it to an icon to render,
// or pass href or to to make it an anchor tag or router's link
// it should work in all 4 combinations (icon or not, link or anchor)
export default function UnderlinedLink({ href, to, icon, children, ...rest }) {
  return (
    <li>
      <StyledLink
        // render it as <Link/> instead of <a/> if needed
        as={to && Link}
        // tell if there's an icon in the link to get different underline

        // TODO Making it uppercase make it give a weird error,
        // figure out what the deal with that
        isthereicon={icon || undefined}
        href={href}
        to={to}
        // rest is mostly for target="_blank" for href
        // TODO maybe I should move href and to into the ...rest
        // or handle this target blank as the props above
        // I don't like it that I have two way of doing things in here
        {...rest}
      >
        {icon && <i className={icon}></i>}
        <p>{children}</p>
      </StyledLink>
    </li>
  );
}
