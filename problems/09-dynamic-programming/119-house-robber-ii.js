/**
 * 119 — House Robber II
 * Difficulty: Medium   ·   Topic: Dynamic Programming
 * ----------------------------------------------------------------------
 * PROBLEM
 *   The houses are arranged in a CIRCLE, so the first and last are adjacent.
 *   You cannot rob two adjacent houses. Return the maximum you can rob.
 *
 * CONSTRAINTS
 *   1 <= nums.length <= 100
 *   0 <= nums[i] <= 1000
 *
 * EXAMPLES
 *   rob([2, 3, 2])     ->  3   // cannot take both 2s, they are adjacent
 *   rob([1, 2, 3, 1])  ->  4
 *   rob([1, 2, 3])     ->  3
 *
 * EDGE CASES
 *   - A single house — the circle rule cannot apply.
 *   - Two houses — take the larger.
 *   - The first and last houses can never BOTH be robbed.
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * COMPLEXITY
 *   Naive:  O(2^n) time — enumerate every subset and reject adjacent picks, now including the
 *           wrap-around.
 *   Target: O(n) time, O(1) space — run the linear House Robber twice, once excluding the last
 *           house and once excluding the first, and take the better.
 * ----------------------------------------------------------------------
 */

function rob(nums) {
  // TODO: your solution here
}

module.exports = { rob };
