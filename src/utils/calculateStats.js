// reference:
// https://www.100utils.com/how-to-calculate-typing-speed-wpm-and-accuracy/

export const calculateGrossWpm = (typedCharacters, time) => (time ? typedCharacters / 5 / time : 0);

export const calculateNetWpm = (typedCharacters, time, uncorrectedErrors) => (time
  ? calculateGrossWpm(typedCharacters, time) - uncorrectedErrors / time
  : 0);

// accuracy expressed in percentages, rounded to the nearest integer
export const calculateAccuracy = (correctCharacters,
  totalCharacters) => (totalCharacters
  ? Math.round((correctCharacters / totalCharacters) * 100) : 0);

export default function calculateStats({
  typedCharacters,
  time,
  uncorrectedErrors,
  correctCharacters,
  totalCharacters,
}) {
  return {
    grossWpm: calculateGrossWpm(typedCharacters, time),
    netWpm: calculateNetWpm(typedCharacters, time, uncorrectedErrors),
    accuracy: calculateAccuracy(correctCharacters, totalCharacters),
  };
}
