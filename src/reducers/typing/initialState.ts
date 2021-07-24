import sampleText from '../../static/fixtures/sampleText';

const [currentWord, ...unfinishedWords] = sampleText.split(' ');

type TypingTimer = {
  minTime: number;
  maxTime: number;
  currentTime: null | number;
  startingTime: number;
  timerStartingMoment: null | Date;
};

export type TypedWord = {
  isOkay: true;
  word: string;
};

type TypingText = {
  finished: TypedWord[];
  current: string;
  unfinished: string[];
  isOkay: boolean;
};

type TypingStats = {
  typedCharacters: number;
  correctCharacters: number;
  uncorrectedErrors: number;
};

export type TypingState = {
  inputValue: string;
  timer: TypingTimer;
  text: TypingText;
  stats: TypingStats;
};

const initialState: TypingState = {
  inputValue: '',
  timer: {
    minTime: 5,
    maxTime: 60 * 15,
    currentTime: null,
    startingTime: 10,
    // it is used to determinate if the timer got reset in the meantime
    timerStartingMoment: null,
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
