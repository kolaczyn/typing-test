import React, { Component } from "react";

export default class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="element text-field">
        <section className="section--completed">
          {this.props.completedWords.join(" ")}{" "}
        </section>
        <section className="section--uncompleted">
          {this.props.uncompletedWords.join(" ")}
        </section>
      </div>
    );
  }
}
