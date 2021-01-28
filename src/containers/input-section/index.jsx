import React, { useContext } from 'react'

import InputField from '../../components/input-field'
import Button from '../../components/ui/Button'
import InputSectionWrapper from './styles'
import TypingContext from '../../contexts/typingContext';

export default function InputSection() {
  const { state, dispatch } = useContext(TypingContext)
  const { inputValue } = state;

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
      <Button>Re</Button>
    </InputSectionWrapper>
  )
}
