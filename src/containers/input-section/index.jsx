import React, { useContext, useEffect, useCallback } from 'react'

import InputField from '../../components/input-field'
import Button from '../../components/ui/Button'
import InputSectionWrapper from './styles'
import TypingContext from '../../contexts/typingContext';
import { actions } from '../../reducers/typing';

export default function InputSection() {
  const { state, dispatch } = useContext(TypingContext)
  const { inputValue } = state;

  const handleRestart = useCallback(() => {
    dispatch({
      type: actions.RESTART,
    });
  }, [dispatch])

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

  return (
    <InputSectionWrapper>
      <Button>50</Button>
      <InputField
        dispatch={dispatch}
        autoFocus
        active
        fieldName="typingInput"
        value={inputValue}
      />
      <Button onClick={handleRestart}>
        <i className="fas fa-redo-alt"></i>
      </Button>
    </InputSectionWrapper>
  )
}
