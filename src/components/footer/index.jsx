import React from 'react'
import Container from '../ui/Container';

import { Wrapper, NavLink, LinksWrapper } from './styles';

// TODO seperate this into few seperate files

const FooterNavLink = ({ href, classes, label }) => (
  <li>
    <NavLink href={href} target="_blank">
      <i className={classes}></i>
      <p>{label}</p>
    </NavLink>
  </li>
)

const footerLinksData = [
  {
    href: 'https://github.com/kolaczyn/typing-test',
    classes: 'fab fa-github',
    label: 'github',
  },
  {
    href: 'https://twitter.com/kolaczyn',
    classes: 'fab fa-twitter',
    label: 'twitter',
  },
  {
    href: 'mailto:kolaczyn@protonmail.com',
    classes: 'fas fa-envelope',
    label: 'email',
  },
]

export default function Footer() {
  return (
    <Wrapper>
      <Container style={{margin: '0 auto'}}>
        <section>
          &copy; {new Date().getFullYear()}
          {' '}
        created by Paweł Kołaczyński
      </section>
        <LinksWrapper>
          {footerLinksData.map(({ href, classes, label }) => <FooterNavLink key={label} href={href} classes={classes} label={label} />)}
        </LinksWrapper>
      </Container>
    </Wrapper>
  )
}
