/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';

import Wrapper, { Section } from './styles';
import CloseButton from '../../common/close-button';
import ExpandButton from '../../common/expand-button';
import UnderlinedLink from '../../common/underlined-link';

const articleLink =
  'https://www.100utils.com/how-to-calculate-typing-speed-wpm-and-accuracy/';
const githubLink = 'https://github.com/kolaczyn/typing-test/issues';

const GeneralLayout: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  return isVisible ? (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Wrapper title="Welcome!" className={isExpanded || 'is-collapsed'}>
      <CloseButton onClick={() => setIsVisible(false)} />
      <Section>
        <p>
          I made this site to practice writing websites in React with a lot of
          reactivity. I added a lot of features to <i>show off</i>.
          <UnderlinedLink isAlwaysUnderlined to="/settings">
            settings
          </UnderlinedLink>
        </p>
        <p>
          If you're wondering what&apos;s the difference between{' '}
          <i>gross WPM</i> and <i>net WPM</i>, here's a{' '}
          <UnderlinedLink
            isAlwaysUnderlined
            href={articleLink}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            rel="noreferrer"
            target="_blank"
          >
            great article
          </UnderlinedLink>{' '}
          explaining it.
        </p>
        <p>
          If you want to report a bug, or just want to leave some kind words,
          you can do it{' '}
          <UnderlinedLink
            isAlwaysUnderlined
            href={githubLink}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            rel="noreferrer"
            target="_blank"
          >
            here
          </UnderlinedLink>
          .
        </p>
      </Section>
      <ExpandButton
        isExpanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      />
    </Wrapper>
  ) : null;
};

export default GeneralLayout;
