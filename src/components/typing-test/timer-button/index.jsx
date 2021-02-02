import React, { useContext, useState } from 'react';

import TypingContext from '../../../contexts/typingContext';
import Button from '../../common/button';

export default function TimerButton() {
  const [isLabelVisible, setIsLabelVisible] = useState(true);
  const { state } = useContext(TypingContext);

  const toggleIsLabelVisible = () => setIsLabelVisible((old) => !old);
  const currentTime = state.timer.currentTime === null
    ? state.timer.startingTime : state.timer.currentTime;
  return (
    <Button onClick={toggleIsLabelVisible}>
      {isLabelVisible ? currentTime : ''}
    </Button>
  );
}
