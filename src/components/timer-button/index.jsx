import React, { useContext } from "react";

import TypingContext from '../../contexts/typingContext';
import Button from "../ui/Button";
import { actions } from '../../reducers/typing'

export default function TimerButton() {
  const { state, dispatch } = useContext(TypingContext);

  const startTimer = () => {
    const interval = setInterval(() => {
      if (state.currentTime > 0) {
        console.log(state);
        dispatch({
          type: actions.TICK_TIMER,
        })
      } else clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval)
  }

  return (
    <Button onClick={startTimer}>
      {state.currentTime}
    </Button>
  );
}
