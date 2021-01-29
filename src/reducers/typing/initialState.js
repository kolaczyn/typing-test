import sampleText from '../../fixtures/sampleText';

const [currentWord, ...unfinished] = sampleText.split(' ');

const initialState = {
  inputValue: '',
  currentTime: 8,
  timer: null,
  text: {
    finished: [],
    current: currentWord,
    unfinished,
    isOkay: true,
  },
};

export default initialState;
