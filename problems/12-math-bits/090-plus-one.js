/**
 * 090 — Plus One
 * Difficulty: Easy   ·   Topic: Math & Bits
 * ----------------------------------------------------------------------
 * PROBLEM
 *   You are given a large integer as an array of digits, most significant digit first,
 *   with no leading zeros. Increment it by one and return the resulting digit array.
 *
 * CONSTRAINTS
 *   1 <= digits.length <= 100
 *   0 <= digits[i] <= 9
 *   digits has no leading zeros.
 *
 * EXAMPLES
 *   plusOne([1, 2, 3])  ->  [1, 2, 4]
 *   plusOne([4, 3, 2, 1])  ->  [4, 3, 2, 2]
 *   plusOne([9, 9])     ->  [1, 0, 0]   // the result is LONGER
 *
 * EDGE CASES
 *   - All nines grows the array by one digit.
 *   - [0] becomes [1].
 *   - Converting to a Number overflows for 100 digits.
 *
 * COMPLEXITY
 *   Naive:  Joining to a number, adding 1, and splitting back loses precision beyond 15 digits.
 *   Target: O(n) time — walk from the last digit: a digit below 9 increments and returns; a 9 becomes 0 and carries. If the loop ends still carrying, prepend a 1.
 * ----------------------------------------------------------------------
 */

function plusOne(digits) {
  // TODO: your solution here
}

module.exports = { plusOne };
