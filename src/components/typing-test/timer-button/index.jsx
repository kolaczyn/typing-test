import React, { useContext } from 'react';

import TypingContext from '../../../contexts/typingContext';
import Button from '../../common/Button';
// import { actions } from '../../reducers/typing'

export default function TimerButton() {
  const { state } = useContext(TypingContext);

  const startTimer = () => {
    // TODO fix this
    // const interval = setInterval(() => {
    //   if (state.currentTime > 0) {
    //     console.log(state);
    //     dispatch({
    //       type: actions.TICK_TIMER,
    //     })
    //   } else clearInterval(interval);
    // }, 1000);
    // return () => clearInterval(interval)
  };

  return (
    <Button onClick={startTimer}>
      {state.currentTime}
    </Button>
  );
}
