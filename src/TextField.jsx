import React, { Component } from "react";

export default class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="element text-field">
        <p>Test</p>
      </div>
    );
  }
}
