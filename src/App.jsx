import React, { Component } from "react";
import Timer from "./Timer";
import InputField from "./InputField";
import TextField from "./TextField";
import sampleText from "./sampleText";
import "./style.css";

class App extends Component {
  state = {
    hideTime: false,
    completedWords: [],
    uncompletedWords: sampleText.split(" ").slice(1),
    currentWord: sampleText.split(" ")[0],
    writtenChars: "",
  };
  // constructor() {
  //   super();
  // }
  onTimesUp = () => {
    this.setState({ hideTime: false });
  };
  onRefresh = () => {};
  handleTimeVisibility = () => {
    this.setState((prevState) => ({
      hideTime: !prevState.hideTime,
    }));
  };

  onNextChar = (str) => {
    this.setState({ writtenChars: str });
  };

  onNextWord = (str) => {
    console.log(this.state.currentWord);
    if (this.state.currentWord === str) {
      this.setState((prevState) => ({
        completedWords: [...prevState.completedWords, str],
        uncompletedWords: prevState.uncompletedWords.slice(1),
        currentWord: prevState.uncompletedWords[0],
        writtenChars: "",
      }));
    }
  };

  render() {
    return (
      <div className="content">
        <div className="content__upper">
          <TextField
            completedWords={this.state.completedWords}
            uncompletedWords={this.state.uncompletedWords}
            currentWord={this.state.currentWord}
            writtenChars={this.state.writtenChars}
          />
        </div>
        <div className="content__lower">
          <button className="element" onClick={this.handleTimeVisibility}>
            <Timer
              initialTime={60}
              onTimesUp={this.onTimesUp}
              hideTime={this.state.hideTime}
            />
          </button>
          <InputField
            onNextWord={this.onNextWord}
            onNextChar={this.onNextChar}
          />
          <button className="element" onClick={this.onRefresh}>
            <img src="refresh.svg" className="refresh-icon" alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
