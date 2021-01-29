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
      // TODO: add properties like autocorrect="off", autocomplete="off", just like on https://10fastfingers.com
      autoFocus={autoFocus}
      value={value}
      onChange={active && handleChange}
    />
  );
}
