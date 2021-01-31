import React, { useState } from 'react';

import Wrapper from './styles';
import CloseButton from '../../common/close-button';

export default function QuickStart() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    isVisible && (
      <Wrapper title="Quick Start">
        <CloseButton onClick={() => setIsVisible(false)} />
        Welcome! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Expedita provident reprehenderit maiores non, quisquam et laudantium
        beatae eaque dicta, consectetur impedit explicabo fuga autem pariatur
        distinctio, placeat est?
      </Wrapper>
    )
  );
}
