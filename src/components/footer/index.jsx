import React from 'react'

import { footerLinksData } from '../../fixtures/footerLinksData';
import { copyrightNotice } from '../../fixtures/copyrightNotice';

import Container from '../ui/Container';
import FooterNavLink from '../footer-nav-link';

import { Wrapper, LinksWrapper } from './styles';

// TODO seperate this into few seperate files


export default function Footer() {
  return (
    <Wrapper>
      <Container style={{ margin: '0 auto' }}>
        <section>{copyrightNotice}</section>
        <LinksWrapper>
          {footerLinksData.map((linkData) => (
            <FooterNavLink
              key={linkData.label}
              {...linkData} />
          ))}
        </LinksWrapper>
      </Container>
    </Wrapper>
  )
}
