import React, { Component } from "react";
import Input from './styles';

class InputField extends Component {
  render() {
    const {inputFieldContent, handleInputChange, active} = this.props;
    return (
      <Input
        autoFocus
        type="text"
        className="input-element element"
        value={inputFieldContent}
        onChange={active ? handleInputChange : null}
      />
    );
  }
}

export default InputField;
