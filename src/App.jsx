import React, { Component } from "react";
import Timer from "./Timer";
import InputField from "./InputField";
import TextField from "./TextField";
import sampleText from "./sampleText";
import "./style.css";

class App extends Component {
  state = {
    isTimeHidden: false,
    completedWords: [],
    uncompletedWords: [],
    currentWord: "",
    writtenChars: "",
  };
  componentDidMount() {
    this.setState({
      uncompletedWords: sampleText.split(" ").slice(1),
      currentWord: sampleText.split(" ")[0],
    })
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
    const initialTime = 60
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
          <button className="element" onClick={this.handleTimeToggle}>
            <Timer
              initialTime={initialTime}
              onTimesUp={this.handleTimesUp}
              hideTime={this.state.isTimeHidden}
            />
          </button>
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
