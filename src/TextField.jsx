import React, { Component } from "react";

export default class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  formatCurrentWord() {
    const { currentWord, writtenChars } = this.props;
    console.log(currentWord, writtenChars);
    const cl = currentWord.startsWith(writtenChars) ? "good" : "wrong";
    console.log(currentWord, writtenChars);
    return <section className={`section--${cl}`}> {currentWord} </section>;
  }
  formatWords(wordsArr, flag) {
    return (
      <section className={`section--${flag}`}>{wordsArr.join(" ")}</section>
    );
  }
  render() {
    const { completedWords, uncompletedWords } = this.props;
    return (
      <div className="element text-field">
        {this.formatWords(completedWords, "completed")}
        {this.formatCurrentWord()}
        {this.formatWords(uncompletedWords, "uncompleted")}
      </div>
    );
  }
}
