function binarySearch(sortedArray, seekElement) {
  function equal(a, b) {
    if (a === b) return true;
    else return false;
  }

  function lessThan(a, b) {
    if (a < b) return true;
    else return false;
  }

  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (equal(sortedArray[middleIndex], seekElement)) {
      return middleIndex;
    }

    if (lessThan(sortedArray[middleIndex], seekElement)) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4));
