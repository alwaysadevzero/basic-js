const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const charCount1 = countChars(s1);
  const charCount2 = countChars(s2);
  let commonCount = 0;

  for (const char in charCount1) {
    if (charCount2[char]) {
      commonCount += Math.min(charCount1[char], charCount2[char]);
    }
  }

  return commonCount;
}

function countChars(str) {
  const charCount = {};

  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}


module.exports = {
  getCommonCharacterCount
};
