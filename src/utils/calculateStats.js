// reference:
// https://www.100utils.com/how-to-calculate-typing-speed-wpm-and-accuracy/

// the time is in seconds
export const calculateGrossWpm = (typedChars, time) => Math.round((time
  ? (12 * typedChars) / time : 0));

export const calculateNetWpm = (typedChars, time, uncorrectedErrors) => (time && typedChars
  ? Math.round(calculateGrossWpm(typedChars, time) - ((60 * uncorrectedErrors) / time))
  : 0);

// accuracy expressed in percentages, rounded to the nearest integer
export const calculateAccuracy = (uncorrectedErrors,
  totalChars) => (totalChars
  ? Math.round(((totalChars - uncorrectedErrors) / totalChars) * 100) : 0);

export default function calculateStats({
  typedCharacters,
  // correctCharacters,
  time,
  uncorrectedErrors,
}) {
  return {
    grossWpm: calculateGrossWpm(typedCharacters, time),
    netWpm: calculateNetWpm(typedCharacters, time, uncorrectedErrors),
    accuracy: calculateAccuracy(uncorrectedErrors, typedCharacters),
  };
}
