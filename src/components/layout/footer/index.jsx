import React from 'react';

import footerLinksData from '../../../static/fixtures/footerLinksData';
import copyrightNotice from '../../../static/fixtures/copyrightNotice';

import Container from '../../common/container';
import UnderlinkedLink from '../../common/underlined-link';
import { Wrapper, Copyright, LinksWrapper } from './styles';

// TODO seperate this into few seperate files

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
          {footerLinksData.map((linkData) => (
            // FIXME {...linkData} causes me to pass
            // linkData.label as a props, though it is not needed
            <UnderlinkedLink key={linkData.label} {...linkData}>
              {linkData.label}
            </UnderlinkedLink>
          ))}
        </LinksWrapper>
      </Container>
    </Wrapper>
  );
}
