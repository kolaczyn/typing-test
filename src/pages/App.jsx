import React, { Component } from "react";
import InputField from "../components/InputField";
import TextField from "../components/TextField";
import Stats from '../components/Stats'
import sampleText from "../static/sampleText";
import "../styles/style.scss";
import { Helmet } from 'react-helmet'

import favicon from '../static/favicon.ico'
import refreshIcon from '../static/refresh.svg'
import Ranking from "../components/Ranking";
import LocalStorageManager from '../static/LocalStorageManager'
import calculateStats from "../static/calculateStats";

const INITIAL_TIME = 60;
const localStorageManager = new LocalStorageManager('scores');

const initialState = {
  isTimeStarted: false,
  completedWords: [],
  uncompletedWords: [],
  currentWord: "",
  writtenChars: "",
  interval: null,
  isFirstChar: true,
  currentTime: INITIAL_TIME,
  keystrokes: 0,
  inputFieldContent: '',
  scores: [],
}

// I'm leaving this here for now

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState }
  }
  componentDidMount() {
    const scores = localStorageManager.value;
    this.setState({
      uncompletedWords: sampleText.split(" ").slice(1),
      currentWord: sampleText.split(" ")[0],
      scores
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
    this.setState({
      interval
    })
  }

  handleTimesUp = () => {
    const { currentTime, keystrokes, completedWords } = this.state
    const stats = calculateStats(INITIAL_TIME - currentTime, keystrokes, completedWords);
    const { wpm, accuracy, timeAgo } = stats;

    const newScore = {
      wpm,
      accuracy,
      timeAgo: 'just now',
    };

    localStorageManager.append(newScore)
    const scores = localStorageManager.value;
    this.setState({scores})
  }


  handleRefresh = () => {
    clearInterval(this.state.interval)
    this.setState({
      ...initialState,
      uncompletedWords: sampleText.split(" ").slice(1),
      currentWord: sampleText.split(" ")[0],
    })
  }

  handleInputChange = event => {
    this.setState(({ keystrokes }) => ({ keystrokes: keystrokes + 1 }))
    const str = event.target.value;
    console.log(this)
    // we clear the input filed on space press
    if (str.slice(str.length - 1) === " ") {
      this.handleNextWord(str.slice(0, -1));
      this.setState({ inputFieldContent: '' });
    } else {
      this.handleNextChar(str);
      this.setState({ inputFieldContent: str });
    }
  }


  handleNextChar = (str) => {
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
    const { completedWords, uncompletedWords, currentWord, writtenChars, currentTime, inputFieldContent } = this.state;


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
          <button className="element">{currentTime}</button>
          <InputField
            active={currentTime}
            inputFieldContent={currentTime ? inputFieldContent : 'Time\'s up!'}
            handleInputChange={this.handleInputChange}
          />
          <button className="element" onClick={this.handleRefresh}>
            <img src={refreshIcon} className="refresh-icon" alt="Refresh" />
          </button>
        </div>
        <Stats keystrokes={this.state.keystrokes} correctWords={this.state.completedWords} wrongWords={0} timePassed={INITIAL_TIME - this.state.currentTime} />
        <Ranking scores={this.state.scores} />
      </div>
    );
  }
}

export default App;
