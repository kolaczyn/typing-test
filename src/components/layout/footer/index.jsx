import React from 'react';

import footerLinksData from '../../../static/fixtures/footerLinksData';
import copyrightNotice from '../../../static/fixtures/copyrightNotice';

import Container from '../../common/container';
import UnderlinkedLink from '../../common/underlined-link';
import { Wrapper, Copyright, LinksWrapper } from './styles';

export default function Footer() {
  return (
    <Wrapper>
      <Container style={{ margin: '0 auto' }}>
        <Copyright>
          <span>{copyrightNotice[0]}</span>
          {' '}
          <span>{copyrightNotice[1]}</span>
        </Copyright>
        <LinksWrapper>
          {footerLinksData.map(({
            href, icon, label, target, rel,
          }) => (
            <UnderlinkedLink
              key={label}
              href={href}
              icon={icon}
              target={target}
              rel={rel}
            >
              {label}
            </UnderlinkedLink>
          ))}
        </LinksWrapper>
      </Container>
    </Wrapper>
  );
}
