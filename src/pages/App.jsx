import React, { Component } from "react";
import InputField from "../components/InputField";
import TextField from "../components/TextField";
import Timer from "../components/Timer";
import Stats from '../components/Stats'
import sampleText from "../static/sampleText";
import "../styles/style.scss";
import {Helmet} from 'react-helmet'

import favicon from '../static/favicon.ico'
import refreshIcon from '../static/refresh.svg'

// I'm leaving this here for now
const INITIAL_TIME = 60;

class App extends Component {
  state = {
    isTimeHidden: false,
    isTimeStarted: false,
    completedWords: [],
    uncompletedWords: [],
    currentWord: "",
    writtenChars: "",
    interval: null,
    isFirstChar: true,
    currentTime: INITIAL_TIME,
    keystrokes: 0,
  };
  componentDidMount() {
    this.setState({
      uncompletedWords: sampleText.split(" ").slice(1),
      currentWord: sampleText.split(" ")[0],
    })
  }

  // start timer from INITIAL_TIME to 0, you don't use  this method
  // after stopping time, 'cause it will overwrite current timer's progress
  startTimer = () => {
    const decreaseTime = () => {
      this.setState(prevState => ({
        currentTime: prevState.currentTime - 1
      }))
    }
    const resetTime = (inter) => {
      clearInterval(inter);
      this.handleTimesUp();
    }
    const interval = setInterval(() => {
      const { currentTime } = this.state;
      if (currentTime > 0)
        decreaseTime();
      else
        // passing in interval here works? Didn't expect that
        resetTime(interval);
    }, 1000)
  }

  handleTimesUp = () => {
    this.setState({ isTimeHidden: false });
  };

  handleRefresh = () => {
    this.setState({
      isTimeHidden: false,
      isTimeStarted: false,


      interval: null,
      currentTime: INITIAL_TIME,

      writtenChars: "",
      completedWords: [],
      uncompletedWords: sampleText.split(" ").slice(1),
      currentWord: sampleText.split(" ")[0],
    })
  }

  handleTimeToggle = () => {
    this.setState(({ isTimeHidden }) => ({
      isTimeHidden: !isTimeHidden,
    }));
  };

  handleNextChar = (str) => {
    this.setState(({ keystrokes }) => ({ keystrokes: keystrokes + 1 }))
    if (this.state.isFirstChar) {
      this.startTimer();
      this.setState({ isFirstChar: false })
    }
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
    const { completedWords, uncompletedWords, currentWord, writtenChars, isTimeHidden, currentTime } = this.state;


    return (
      <div className="content">
        <Helmet>
          <title>Test Your Typing Speed</title>
          <link rel="icon" type="image/png" href={favicon} sizes="64x64" />
        </Helmet>

          <div className="content__upper">
            <TextField
              completedWords={completedWords}
              uncompletedWords={uncompletedWords}
              currentWord={currentWord}
              writtenChars={writtenChars}
            />
          </div>
          <div className="content__lower">
            <Timer
              handleClick={this.handleTimeToggle}
              currentTime={currentTime}
              onTimesUp={this.handleTimesUp}
              hideTime={isTimeHidden}
            />
            <InputField
              onNextWord={this.handleNextWord}
              onNextChar={this.handleNextChar}
            />
            <button className="element" onClick={this.handleRefresh}>
              <img src={refreshIcon} className="refresh-icon" alt="Refresh" />
            </button>
          </div>
          <Stats keystrokes={this.state.keystrokes} correctWords={this.state.completedWords} timePassed={INITIAL_TIME - this.state.currentTime} />
    </div>
    );
  }
}

export default App;
