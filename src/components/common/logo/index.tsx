import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Wrapper from './styles';

const timeSpacing = 195;
const finalLabel = 'TypingTest';

const Logo: React.FC = () => {
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
        currIdx++;
      }, timeSpacing);

      return () => clearInterval(labelInterval);
    }, 950);
  }, []);

  return (
    <Link to="/">
      <Wrapper>{label}</Wrapper>
    </Link>
  );
};

export default Logo;
