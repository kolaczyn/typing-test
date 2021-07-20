import React from 'react';

import footerLinksData from '../../../static/fixtures/footerLinksData';
import copyrightNotice from '../../../static/fixtures/copyrightNotice';

import Container from '../../common/container';
import UnderlinkedLink from '../../common/underlined-link';
import { Wrapper, Copyright, LinksWrapper } from './styles';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Container style={{ margin: '0 auto' }}>
        <Copyright>
          <span>{copyrightNotice[0]}</span> <span>{copyrightNotice[1]}</span>
        </Copyright>
        <LinksWrapper>
          {footerLinksData.map(({ href, icon, label, target, rel }) => (
            <li key={label}>
              <UnderlinkedLink
                href={href}
                icon={icon}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                target={target}
                rel={rel}
              >
                {label}
              </UnderlinkedLink>
            </li>
          ))}
        </LinksWrapper>
      </Container>
    </Wrapper>
  );
};
export default Footer;
