/**
 * 166 — Find All Numbers Disappeared in an Array
 * Difficulty: Easy   ·   Topic: Arrays & Hashing
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an array `nums` of n integers where each nums[i] is in the range [1, n], return an
 *   array of all the integers in [1, n] that do not appear in `nums`. Any order is accepted.
 *
 * CONSTRAINTS
 *   n == nums.length, 1 <= n <= 10^5
 *   1 <= nums[i] <= n
 *
 * EXAMPLES
 *   findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])  ->  [5, 6]
 *   findDisappearedNumbers([1, 1])                    ->  [2]
 *
 * EDGE CASES
 *   - Nothing missing (a permutation of 1..n) returns [].
 *   - Every slot holds the same value, so n - 1 numbers are missing.
 *
 * FOLLOW-UP
 *   - Could you do it without extra space (the returned list does not count) in O(n) time?
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * HINTS
 *   1. The values are valid indices. Can the array itself record which values it has seen?
 *
 * COMPLEXITY
 *   Naive:  O(n) time, O(n) space — put every value in a Set, then check 1..n.
 *   Target: O(n) time, O(1) extra space — for each value v, negate nums[|v| - 1]; indices that
 *           stay positive are the missing numbers.
 * ----------------------------------------------------------------------
 */

function findDisappearedNumbers(nums) {
  // TODO: your solution here
}

module.exports = { findDisappearedNumbers };
