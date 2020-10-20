import React, { Component } from "react";
import Timer from "./Timer";
import Input from "./Input";
import Text from "./TextField";
import sampleText from "./sampleText";
import "./style.css";

class App extends Component {
  state = {
    hideTime: false,
    completedWords: [],
    uncompletedWords: sampleText.split(" ").slice(1),
    currentWord: sampleText.split(" ")[0],
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

  onInputChange = (str) => {
    console.log(this.state.currentWord);
    if (this.state.currentWord === str) {
      this.setState((prevState) => ({
        completedWords: [...prevState.completedWords, str],
        uncompletedWords: prevState.uncompletedWords.slice(1),
        currentWord: prevState.uncompletedWords[0],
      }));
    }
    // this.setState((prevState) => ({
    //   writtenWords: [...prevState.writtenWords, str],
    // }));
  };

  render() {
    return (
      <div className="content">
        <div className="content__upper">
          <Text
            completedWords={this.state.completedWords}
            uncompletedWords={this.state.uncompletedWords}
            currentWord={this.state.currentWord}
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
          <Input onInputChange={this.onInputChange} />
          <button className="element" onClick={this.onRefresh}>
            <img src="refresh.svg" className="refresh-icon" alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
