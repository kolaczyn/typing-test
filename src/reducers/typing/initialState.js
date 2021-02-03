import sampleText from '../../static/fixtures/sampleText';

const [currentLine, ...unfinishedLines] = sampleText;
const [currentWord, ...unfinishedWords] = currentLine.split(' ');

const initialState = {
  inputValue: '',
  timer: {
    minTime: 5,
    maxTime: 60 * 15,
    currentTime: null,
    startingTime: 60,
    // it is used to determinate if the timer got reset in the meantime
    timerStartingMoment: null,
  },
  lines: {
    finished: [],
    current: currentLine,
    unfinished: unfinishedLines,
  },
  text: {
    // word that have been already written - regardless of if they were written correct
    finished: [],
    // word that the player currently needs to type
    current: currentWord,
    // word that are yet to be written
    unfinished: unfinishedWords,
    // tells if the player has maybe any error in the current word
    isOkay: true,
  },
  // some of the values are cached
  // so you don't have to loop through all the typed words on every single keystroke
  stats: {
    typedCharacters: 0,
    correctCharacters: 0,
    uncorrectedErrors: 0,
  },
};

export default initialState;
