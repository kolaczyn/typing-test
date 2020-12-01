import React, { Component } from "react";
import InputField from "../components/InputField";
import TextField from "../components/TextField";
import Timer from "../components/Timer";
import sampleText from "../static/sampleText";
import "../styles/style.css";

// I'm leaving this here for now
const INITIAL_TIME = 60;

class App extends Component {
  state = {
    isTimeHidden: false,
    completedWords: [],
    uncompletedWords: [],
    currentWord: "",
    writtenChars: "",
    interval: null,
    currentTime: INITIAL_TIME
  };
  componentDidMount() {
    this.setState({
      uncompletedWords: sampleText.split(" ").slice(1),
      currentWord: sampleText.split(" ")[0],
    })
  }

  // start timer from INITIAL_TIME to 0, you don't use  this method
  // after stopping time, 'cause it will overwrite current timer's progress
  startTimer() {
  }

  handleTimesUp = () => {
    this.setState({ isTimeHidden: false });
  };

  handleRefresh = () => { };

  handleTimeToggle = () => {
    this.setState((prevState) => ({
      isTimeHidden: !prevState.isTimeHidden,
    }));
  };

  handleNextChar = (str) => {
    this.setState({ writtenChars: str });
  };

  handleNextWord = (str) => {
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
          <Timer
            handleClick={this.handleTimeToggle}
            initialTime={INITIAL_TIME}
            onTimesUp={this.handleTimesUp}
            hideTime={this.state.isTimeHidden}
          />
          <InputField
            onNextWord={this.handleNextWord}
            onNextChar={this.handleNextChar}
          />
          <button className="element" onClick={this.handleRefresh}>
            <img src="refresh.svg" className="refresh-icon" alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
