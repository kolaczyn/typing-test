import React, { useContext, useEffect } from 'react'

import InputField from '../../components/input-field'
import Button from '../../components/ui/Button'
import InputSectionWrapper from './styles'
import TypingContext from '../../contexts/typingContext';
import { actions } from '../../reducers/typing';

export default function InputSection() {
  const { state, dispatch } = useContext(TypingContext)
  const { inputValue } = state;

  const handleRestart = () => {
    dispatch({
      type: actions.RESTART,
    })
  }

  useEffect(() => {
    console.log('set up')

    const f5 = 116;
    document.onkeydown = (e) => {
      // solve the depracation issue
      if (e.keyCode === f5) {
        e.preventDefault();
        handleRestart();
      }
    };

  }, []);

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
      <Button onClick={handleRestart}>Re</Button>
    </InputSectionWrapper>
  )
}
