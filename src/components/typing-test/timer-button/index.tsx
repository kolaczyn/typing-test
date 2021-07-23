import React, { useContext, useState } from 'react';

import TypingStateContext from '../../../contexts/TypingStateContext';
import Button from '../../common/button';

const TimerButton: React.FC = () => {
  const [isLabelVisible, setIsLabelVisible] = useState(true);
  const state = useContext(TypingStateContext);

  const toggleIsLabelVisible = () => setIsLabelVisible(old => !old);
  const currentTime =
    state?.timer.currentTime === null
      ? state.timer.startingTime
      : state?.timer.currentTime;
  return (
    <Button onClick={toggleIsLabelVisible} aria-label="timer-button">
      {isLabelVisible ? currentTime : ''}
    </Button>
  );
};

export default TimerButton;
