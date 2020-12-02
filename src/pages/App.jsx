import React, { Component } from "react";
import { Helmet } from 'react-helmet';

import InputField from "../components/InputField";
import Ranking from "../components/Ranking";
import Stats from '../components/Stats';
import TextField from "../components/TextField";

import LocalStorageManager from '../helpers/LocalStorageManager';
import calculateStats from "../helpers/calculateStats";
import Timer from '../helpers/Timer'

import sampleText from "../static/sampleText";
import favicon from '../static/favicon.ico';
import refreshIcon from '../static/refresh.svg';

import "../styles/style.scss";


const INITIAL_TIME = 10;
const localStorageManager = new LocalStorageManager('scores');
const timer = new Timer(INITIAL_TIME)

const initialState = {
  isTimeStarted: false,
  completedWords: [],
  uncompletedWords: [],
  currentWord: "",
  writtenChars: "",
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
    timer.intervalCallback = () => {
      this.setState({ currentTime: timer.remainingSeconds });
    }
    timer.lastIntervalCallback = () => {
      this.handleTimesUp()
    };
    timer.start();
  }

  handleTimesUp = () => {
    const { currentTime, keystrokes, completedWords } = this.state
    const stats = calculateStats(INITIAL_TIME - currentTime, keystrokes, completedWords);
    const { wpm, accuracy, timeAgo } = stats;

    const newScore = {
      wpm,
      accuracy,
      timeAgo: 'now',
    };

    localStorageManager.append(newScore)
    const scores = localStorageManager.value;
    this.setState({ scores })
  }


  handleRefresh = () => {
    timer.stop();
    const scores = localStorageManager.value;
    this.setState({
      ...initialState,
      uncompletedWords: sampleText.split(" ").slice(1),
      currentWord: sampleText.split(" ")[0],
      scores
    })
  }

  handleInputChange = event => {
    this.setState(({ keystrokes }) => ({ keystrokes: keystrokes + 1 }))
    const str = event.target.value;
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
