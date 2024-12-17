const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return Math.max(...String(n).split('').map((_, i) => String(n).replace(String(n)[i], '')));
}

module.exports = {
  deleteDigit
};

// function deleteDigit(n) {
//   const digits = [];
//   const str = String(n);

//  for (let i = 0; i < str.length; i += 1) {
//   const digit = str.replace(str[i], '');
//   digits.push(+digit);
//  }
//  return Math.max(...digits); 
// }
