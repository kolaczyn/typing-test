/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useContext, useEffect, useCallback, useRef } from 'react';

import InputField from '../../common/input-field';
import TimerButton from '../timer-button';
import Button from '../../common/button/styles';
import InputSectionWrapper from './styles';
import TypingStateContext from '../../../contexts/TypingStateContext';
import TypingDispatchContext from '../../../contexts/TypingDispatchContext';
import TypingAction from '../../../reducers/typing/actions';
import startTimer from '../../../utils/startTimer';

const InputSection: React.FC = () => {
  const state = useContext(TypingStateContext);
  const dispatch = useContext(TypingDispatchContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const { inputValue } = state;
  const { currentTime } = state.timer;

  const handleRestart = useCallback(() => {
    dispatch({
      type: TypingAction.RESTART,
    });
    inputRef.current?.focus();
  }, [dispatch]);

  useEffect(() => {
    document.onkeydown = e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleRestart();
      }
    };
    return () => {
      document.onkeydown = null;
    };
  }, [handleRestart]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // start timer on the first key press
    if (state.stats.typedCharacters === 0) startTimer({ state, dispatch });
    if (value.includes(' ')) {
      dispatch({
        type: TypingAction.SPACE,
        payload: value,
      });
    } else {
      dispatch({
        type: TypingAction.KEYSTROKE,
        payload: value,
      });
    }

    const prev = state.inputValue;
    const curr = e.target.value;
    const delta = curr.length - prev.length;
    // I need to check if the curr !== ' ', because nothing should happen if
    // the user keeps pressing space
    if (delta > 0 && curr !== ' ') {
      dispatch({
        type: TypingAction.INCREMENT_TYPED_CHARS,
        payload: delta,
      });
    }
  };

  return (
    <InputSectionWrapper>
      <TimerButton />
      <InputField
        ref={inputRef}
        value={inputValue}
        active={currentTime !== 0}
        inactiveMessage="Time's up"
        autoFocus
        onChange={handleChange}
        noCorrection
      />
      {/* @ts-ignore */}
      <Button onClick={handleRestart}>
        <span className="material-icons">refresh</span>
      </Button>
    </InputSectionWrapper>
  );
};
export default InputSection;
