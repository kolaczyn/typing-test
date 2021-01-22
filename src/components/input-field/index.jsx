import React from "react";
import Input from './styles';

export default function InputField(props) {
  const { inputFieldContent, handleInputChange, active, autoFocus } = props;

  return (
    <Input
      autoFocus={autoFocus}
      value={inputFieldContent}
      onChange={active && handleInputChange}
    />
  );
}
