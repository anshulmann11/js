const smallest = function (s, n) {
  let maxLength = 0;
  let charFrequency = {};
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];

    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }

    charFrequency[rightChar] += 1;

    while (Object.keys(charFrequency).length > n) {
      const leftChar = s[windowStart];

      // charFrequency[leftChar] -= 1;

      // if (charFrequency[leftChar] === 0) {
      delete charFrequency[leftChar];
      // }
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};
console.log(smallest("cbbebi", 3));
