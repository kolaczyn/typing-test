import React from "react";
import Input from './styles';

import { actions } from '../../reducers/typing';

export default function InputField(props) {
  const { value, active, autoFocus, fieldName, dispatch } = props;

  const handleChange = (e) => {
    dispatch({
      type: actions.KEYSTROKE,
      fieldName,
      payload: e.target.value,
    })
  }

  return (
    <Input
      autoComplete="off"
      spellCheck="false"
      autoCorrect="off"
      autoCapitalize="off"
      autoFocus={autoFocus}
      value={value}
      onChange={active && handleChange}
    />
  );
}
