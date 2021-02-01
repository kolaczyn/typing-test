import calculateStats, { calculateGrossWpm, calculateNetWpm, calculateAccuracy } from '../../utils/calculateStats';

describe('calculateGrossWpm', () => {
  it('correctly calculates gross wpm', () => {
    const testingData = [
      {
        typedChars: 60,
        time: 60,
        expectedResult: 12,
      },
      {
        typedChars: 120,
        time: 60,
        expectedResult: 24,
      },
      {
        typedChars: 1000,
        time: 600,
        expectedResult: 20,
      },
    ];

    testingData.forEach(({ typedChars, time, expectedResult }) => {
      expect(calculateGrossWpm(typedChars, time)).toBe(expectedResult);
    });
  });
  it('correctly handles edge cases', () => {
    const testingData = [
      {
        typedChars: 120,
        time: 0,
        expectedResult: 0,
      },
      {
        typedChars: 0,
        time: 60,
        expectedResult: 0,
      },
    ];

    testingData.forEach(({ typedChars, time, expectedResult }) => {
      expect(calculateGrossWpm(typedChars, time)).toBe(expectedResult);
    });
  });
});

describe('calculateNetWpm', () => {
  it('correctly calculates net wpm', () => {
    const testingData = [
      {
        typedChars: 60,
        time: 60,
        uncorrectedErrors: 0,
        expectedResult: 12,
      },
      {
        typedChars: 800,
        time: 120,
        uncorrectedErrors: 8,
        expectedResult: 76,
      },
      {
        typedChars: 1000,
        time: 120,
        uncorrectedErrors: 100,
        expectedResult: 50,
      },
    ];

    testingData.forEach(({
      typedChars, time, uncorrectedErrors, expectedResult,
    }) => {
      expect(calculateNetWpm(typedChars, time, uncorrectedErrors)).toBe(expectedResult);
    });
  });
  it('correctly handles edge cases', () => {
    const testingData = [
      {
        typedChars: 120,
        time: 0,
        uncorrectedErrors: 29,
        expectedResult: 0,
      },
      {
        typedChars: 0,
        time: 60,
        uncorrectedErrors: 1,
        expectedResult: 0,
      },
    ];

    testingData.forEach(({
      typedChars, time, uncorrectedErrors, expectedResult,
    }) => {
      expect(calculateNetWpm(typedChars, time, uncorrectedErrors)).toBe(expectedResult);
    });
  });
});

describe('calculateAccuracy', () => {
  it('correctly calculates accuracy', () => {
    const testingData = [
      {
        typedChars: 60,
        totalChars: 100,
        expectedResult: 60,
      },
      {
        typedChars: 99,
        totalChars: 100,
        expectedResult: 99,
      },
      {
        typedChars: 32,
        totalChars: 128,
        expectedResult: 25,
      },
    ];

    testingData.forEach(({ typedChars, totalChars, expectedResult }) => {
      expect(calculateAccuracy(typedChars, totalChars)).toBe(expectedResult);
    });
  });

  it('correctly handles edge cases', () => {
    const testingData = [
      {
        typedChars: 0,
        totalChars: 60,
        expectedResult: 0,
      },
      {
        typedChars: 0,
        totalChars: 0,
        expectedResult: 0,
      },
    ];

    testingData.forEach(({ typedChars, totalChars, expectedResult }) => {
      expect(calculateAccuracy(typedChars, totalChars)).toBe(expectedResult);
    });
  });
});

describe('calculate stats', () => {
  it('correctly calculates all the stats', () => {
    const input = {
      typedCharacters: 800,
      time: 120,
      uncorrectedErrors: 8,
    };

    const { grossWpm, netWpm, accuracy } = calculateStats(input);
    expect(grossWpm).toBe(80);
    expect(netWpm).toBe(76);
    expect(accuracy).toBe(99);
  });
});
