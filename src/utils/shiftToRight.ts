// basically shift everything to the right:
// [0, 1, 2], 3, [4, 5, 6] becomes
// [0, 1, 2, 3], 4, [5, 6].

export default function shiftToRight<T>(
  leftArray: T[],
  element: T,
  rightArray: T[]
): [T[], T, T[]] {
  const newLeftArray = [...leftArray, element];
  const newElement = rightArray[0];
  const newRightArray = rightArray.slice().splice(1);

  return [newLeftArray, newElement, newRightArray];
}
