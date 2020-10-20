import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  // I know, two methods from two different function
  // share a name. I'll proabably fix that.
  onInputChange = (event) => {
    const str = event.target.value;
    // we clear the input filed on space press
    if (str.slice(str.length - 1) === " ") {
      this.props.onNextWord(str.slice(0, -1));
      this.setState({ text: "" });
    } else {
      this.props.onNextChar(str);
      this.setState({ text: str });
    }
  };
  render() {
    return (
      <input
        type="text"
        className="input-element element"
        value={this.state.text}
        onChange={this.onInputChange}
      />
    );
  }
}

export default InputField;
