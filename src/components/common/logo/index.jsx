import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Wrapper from './styles';

const timeSpacing = 215;
const finalLabel = 'TypingTest';

export default function Logo() {
  const [label, setLabel] = useState('_');

  useEffect(() => {
    // yeah, it's a pretty messy code
    // but hey, it werks!
    setTimeout(() => {
      const letters = finalLabel.split('');
      let currIdx = 0;
      const labelInterval = setInterval(() => {
        if (currIdx > letters.length) clearInterval(labelInterval);
        else setLabel(`${letters.slice(0, currIdx).join('')}_`);
        // eslint-disable-next-line no-plusplus
        currIdx++;
      }, timeSpacing);

      let shouldPutUnderscoreNext = true;
      let underscoreInterval = null;
      setTimeout(() => {
        underscoreInterval = setInterval(() => {
          if (shouldPutUnderscoreNext) {
            setLabel('TypingTest_');
          } else setLabel('TypingTest ');
          shouldPutUnderscoreNext = !shouldPutUnderscoreNext;
        }, 515);
      }, timeSpacing * (finalLabel.length + 1));
      return () => clearInterval(underscoreInterval);
    }, 950);
  }, []);

  return (
    <Link to="/">
      <Wrapper>
        {label}
      </Wrapper>
    </Link>
  );
}
