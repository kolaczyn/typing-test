/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react';

import Wrapper, { DotDotDot } from './styles';

const dots = '.....';

const Spinner: React.FC = () => {
  const [curIdx, setCurIdx] = useState(0);

  const currentDots = dots.split('');
  currentDots[curIdx] = ':';
  // currentDots[(curIdx + 3) % dots.length] = ';';
  currentDots.join('');
  useEffect(() => {
    const interval = setInterval(() => {
      setCurIdx(idx => (idx + 1) % dots.length);
    }, 250);
    return () => clearInterval(interval);
  }, []);
  return (
    <Wrapper>
      <DotDotDot>{currentDots}</DotDotDot>
      <p style={{ margin: 2 }}>Loading</p>
      <DotDotDot style={{ transform: 'scale(-1, -1)' }}>
        {currentDots}
      </DotDotDot>
    </Wrapper>
  );
};
export default Spinner;
