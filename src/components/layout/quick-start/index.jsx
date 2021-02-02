import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Wrapper, { Section } from './styles';
import CloseButton from '../../common/close-button';
import ExpandButton from '../../common/expand-button';

export default function QuickStart() {
  const [isVisible, setIsVisible] = useState(true);
  // const [isExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    isVisible && (
      <>
        <Wrapper title="Welcome!" className={!isExpanded ? 'is-collapsed' : ''}>
          <CloseButton onClick={() => setIsVisible(false)} />
          {/* TODO this looks like shit with the formatting eslint forces on me */}
          <Section>
            <p>
              I made this site to practice writing websites
              in React with a lot of reactivity. I added a lot of features
              to
              {' '}
              <i>show off</i>
              , which you may find distracting. You can
              disable them in the
              {' '}
              <u>
                <Link to="/settings">settings</Link>
              </u>
              .
            </p>
            <p>
              If you&apos;re wondering what&apos;s the difference between
              {' '}
              <i>gross WPM</i>
              {' '}
              and
              {' '}
              <i>net WPM</i>
              , here&apos;s a
              {' '}
              <u>
                <a href="https://www.100utils.com/how-to-calculate-typing-speed-wpm-and-accuracy/" rel="noreferrer">
                  great article
                </a>
              </u>
              {' '}
              explaining it.
            </p>
            <p>
              I have a lot more features planned, like top scores and statics breakdown,
              so it would be cool to see you come back here soon.
            </p>
            <p>
              If you want to report a bug, or just want to leave some kind words, you can do it
              {' '}
              <u><a href="https://github.com/kolaczyn/typing-test/issues" rel="noreferrer" target="_blank">here</a></u>
              .
            </p>
          </Section>
          <ExpandButton isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />
        </Wrapper>
      </>
    )
  );
}
