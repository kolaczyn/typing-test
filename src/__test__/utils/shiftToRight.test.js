import shiftToRight from '../../utils/shiftToRight';
// FIXME for some reason this test doesn't show up in the coverage report in index.html

describe('shiftToRight', () => {
  it('correctly shifts elements to \'the right\'', () => {
    const left = [1, 2];
    const middle = 3;
    const right = [4, 5, 6];
    const result = shiftToRight(left, middle, right);
    expect(result[0]).toStrictEqual([1, 2, 3]);
    expect(result[1]).toBe(4);
    expect(result[2]).toStrictEqual([5, 6]);
  });
  it('correctly shifts elements to \'the right\'', () => {
    const left = ['lorem', 'ipsum', 'sit', 'amet'];
    const middle = 'consectetur';
    const right = ['adipiscing'];
    const result = shiftToRight(left, middle, right);
    expect(result[0]).toStrictEqual(['lorem', 'ipsum', 'sit', 'amet', 'consectetur']);
    expect(result[1]).toBe('adipiscing');
    expect(result[2]).toStrictEqual([]);
  });
});
