import React, { Component } from "react";

class InputField extends Component {

  render() {
    const {inputFieldContent, handleInputChange} = this.props;
    return (
      <input
        autoFocus
        type="text"
        className="input-element element"
        value={inputFieldContent}
        onChange={handleInputChange}
      />
    );
  }
}

export default InputField;
