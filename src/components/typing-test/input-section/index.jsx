import React, { useContext, useEffect, useCallback } from 'react';

import InputField from '../../common/input-field';
import TimerButton from '../timer-button';
import Button from '../../common/button';
import InputSectionWrapper from './styles';
import TypingContext from '../../../contexts/typingContext';
import * as actions from '../../../reducers/typing/actions';

export default function InputSection() {
  const { state, dispatch } = useContext(TypingContext);
  const { inputValue } = state;

  const handleRestart = useCallback(() => {
    dispatch({
      type: actions.RESTART,
    });
  }, [dispatch]);

  useEffect(() => {
    // TODO uncomment this in production
    // const f5KeyCode = 116;
    const f5KeyCode = -1;
    document.onkeydown = (e) => {
      // solve the depracation issue
      if (e.keyCode === f5KeyCode) {
        e.preventDefault();
        handleRestart();
      }
    };
  }, [handleRestart]);

  const handleChange = (e) => {
    // console.log(curr.length === 1 + prev.length && curr.replace(prev, ''));
    dispatch({
      type: actions.KEYSTROKE,
      payload: e.target.value,
    });

    const prev = state.inputValue;
    const curr = e.target.value;
    const delta = curr.length - prev.length;
    // I need to check if the curr !== ' ', because nothing should happen if
    // the user keeps pressing space
    if (delta > 0 && curr !== ' ') {
      dispatch({
        type: actions.INCREMENT_TYPED_CHARS,
        payload: delta,
      });
    }
  };

  return (
    <InputSectionWrapper>
      <TimerButton />
      <InputField
        value={inputValue}
        active
        autoFocus
        onChange={handleChange}
        noCorrection
      />
      <Button onClick={handleRestart}>
        <span className="material-icons">refresh</span>
      </Button>
    </InputSectionWrapper>
  );
}
