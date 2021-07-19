// reference:
// https://www.100utils.com/how-to-calculate-typing-speed-wpm-and-accuracy/

// the time is in seconds
export const calculateGrossWpm = (typedChars: number, time: number): number =>
  Math.round(time ? (12 * typedChars) / time : 0);

export const calculateNetWpm = (
  typedChars: number,
  time: number,
  uncorrectedErrors: number
): number =>
  time && typedChars
    ? Math.round(
        calculateGrossWpm(typedChars, time) - (60 * uncorrectedErrors) / time
      )
    : 0;

// accuracy expressed in percentages, rounded to the nearest integer
export const calculateAccuracy = (
  uncorrectedErrors: number,
  totalChars: number
): number =>
  totalChars
    ? Math.round(((totalChars - uncorrectedErrors) / totalChars) * 100)
    : 0;

export default function calculateStats({
  typedCharacters,
  time,
  uncorrectedErrors,
}: {
  typedCharacters: number;
  time: number;
  uncorrectedErrors: number;
}): { grossWpm: number; netWpm: number; accuracy: number } {
  return {
    grossWpm: calculateGrossWpm(typedCharacters, time),
    netWpm: calculateNetWpm(typedCharacters, time, uncorrectedErrors),
    accuracy: calculateAccuracy(uncorrectedErrors, typedCharacters),
  };
}
