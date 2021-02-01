// tells how many chars does val1 have in common with val2
// e.g. '123' has 3 common characters with '1234'
//  and 'fight' has 2 common characters with 'f000t'

// I have no fricking idea how to name these variables
const countCorrectCharacters = (val1, val2) => {
  const arr1 = val1.split('');
  const arr2 = val2.split('');

  return arr1.reduce((total, char, idx) => total + (char === arr2[idx]), 0);
};

export default countCorrectCharacters;
