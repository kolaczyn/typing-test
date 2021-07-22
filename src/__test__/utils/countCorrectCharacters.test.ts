import countCorrectChars from '../../utils/countCorrectChars';

describe('countCorrectChars', () => {
  it('correctly counts the number of correct characters', () => {
    expect(countCorrectChars('hello world', 'javascript')).toBe(0);
    expect(countCorrectChars('1234', '1234')).toBe(4);
    expect(countCorrectChars('python is fun', 'python')).toBe(6);
    expect(countCorrectChars('lorem ipsum dolor', 'lOrEm IpSuM dOlOr')).toBe(10);
    expect(countCorrectChars('', 'world')).toBe(0);
  });
});
