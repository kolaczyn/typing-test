// basically shift everything to the right:
// [0, 1, 2], 3, [4, 5, 6] becomes
// [0, 1, 2, 3], 4, [5, 6].

const shiftToRight = (leftArray, element, rightArray) => {
  const newLeftArray = [...leftArray, element];
  const newElement = rightArray[0];
  const newRightArray = rightArray.slice().splice(1);

  return [newLeftArray, newElement, newRightArray];
};

export default shiftToRight;
