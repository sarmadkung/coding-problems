/**
 * 102 — Move Zeroes
 * Difficulty: Easy   ·   Topic: Arrays & Hashing
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an array `nums`, move all zeroes to the end while keeping the relative order of
 *   the non-zero elements. You must do this IN PLACE without copying the array.
 *
 * CONSTRAINTS
 *   1 <= nums.length <= 10^4
 *   -2^31 <= nums[i] <= 2^31 - 1
 *   You must do it in place, without making a copy of the array.
 *
 * EXAMPLES
 *   moveZeroes([0, 1, 0, 3, 12])  ->  [1, 3, 12, 0, 0]
 *   moveZeroes([0])               ->  [0]
 *   moveZeroes([1, 2])            ->  [1, 2]  // already done
 *
 * EDGE CASES
 *   - An array of all zeroes, or with no zeroes.
 *   - The order of the non-zero elements must be preserved.
 *
 * FOLLOW-UP
 *   - Could you minimize the total number of operations done?
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * COMPLEXITY
 *   Naive:  O(n^2) time — repeatedly find a zero and shift everything after it left by one.
 *   Target: O(n) time, O(1) space — a write pointer for the next non-zero slot; after one pass,
 *           fill the tail with zeroes.
 * ----------------------------------------------------------------------
 */

function moveZeroes(nums) {
  // TODO: your solution here
}

module.exports = { moveZeroes };
