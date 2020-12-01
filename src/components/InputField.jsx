import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }


  handleInputChange = event => {
    const { onNextWord, onNextChar } = this.props;
    const str = event.target.value;
    // we clear the input filed on space press
    if (str.slice(str.length - 1) === " ") {
      onNextWord(str.slice(0, -1));
      this.setState({ text: '' });
    } else {
      onNextChar(str);
      this.setState({ text: str });
    }
  };
  render() {
    return (
      <input
        autoFocus
        type="text"
        className="input-element element"
        value={this.state.text}
        onChange={this.handleInputChange}
      />
    );
  }
}

export default InputField;
