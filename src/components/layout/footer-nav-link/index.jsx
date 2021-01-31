import React from 'react'

import { NavLink } from './styles';

export default function FooterNavLink({ href, classes, label, ...rest }) {
  return (
    <li>
      <NavLink href={href} {...rest}>
        <i className={classes}></i>
        <p>{label}</p>
      </NavLink>
    </li>
  );
}
