import countIncorrectChars from '../../utils/countIncorrectChars';

describe('countCorrectChars', () => {
  // TODO change the label in it below
  it('write this', () => {
    expect(countIncorrectChars('react', 'react')).toBe(0);
    expect(countIncorrectChars('qwerty', 'QWERTY')).toBe(6);
    expect(countIncorrectChars('qwerty', 'qwertyuiop')).toBe(4);
    expect(countIncorrectChars('a', 'gawr gura')).toBe(9);
    expect(countIncorrectChars('aSdF', 'asdff')).toBe(3);
  });
});
