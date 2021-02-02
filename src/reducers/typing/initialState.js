import sampleText from '../../static/fixtures/sampleText';

const [currentWord, ...unfinished] = sampleText.split(' ');

const initialState = {
  inputValue: '',
  timer: {
    currentTime: null,
    startingTime: 5,
    // it is used to determinate if the timer got reset in the meantime
    timerStartingMoment: null,
  },
  text: {
    // word that have been already written - regardless of if they were written correct
    finished: [],
    // word that the player currently needs to type
    current: currentWord,
    // word that are yet to be written
    unfinished,
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
