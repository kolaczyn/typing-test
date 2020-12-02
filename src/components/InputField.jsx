import React, { Component } from "react";

class InputField extends Component {

  render() {
    const {inputFieldContent, handleInputChange, active} = this.props;
    return (
      <input
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
