/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// basically shift everything to the right:
// [0, 1, 2], 3, [4, 5, 6] becomes
// [0, 1, 2, 3], 4, [5, 6].

export default function shiftToRight(
  leftArray: any[],
  element: any,
  rightArray: any[]
): [any[], any, any[]] {
  const newLeftArray = [...leftArray, element];
  const newElement = rightArray[0];
  const newRightArray = rightArray.slice().splice(1);

  return [newLeftArray, newElement, newRightArray];
}
