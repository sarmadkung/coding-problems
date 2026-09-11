/**
 * 004 — Maximum Subarray
 * Difficulty: Medium   ·   Topic: Arrays & Hashing
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an integer array `nums`, find the contiguous subarray with the largest sum
 *   and return that sum. The subarray must contain at least one element.
 *
 * CONSTRAINTS
 *   1 <= nums.length <= 10^5
 *   -10^4 <= nums[i] <= 10^4
 *
 * EXAMPLES
 *   maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])  ->  6   // [4,-1,2,1]
 *   maxSubArray([1])                              ->  1
 *   maxSubArray([-3, -1, -2])                     ->  -1  // all negative
 *
 * EDGE CASES
 *   - All numbers negative — the answer is the single largest element, not 0.
 *   - Single element.
 *
 * FOLLOW-UP
 *   - If you have figured out the O(n) solution, try coding another solution using the divide and
 *     conquer approach.
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * HINTS
 *   1. Do not initialize the running max to 0.
 *
 * COMPLEXITY
 *   Naive:  O(n^2) time — sum every subarray.
 *   Target: O(n) time, O(1) space — Kadane's algorithm: at each index keep the best sum ending
 *           here.
 * ----------------------------------------------------------------------
 */

function maxSubArray(nums) {
  // TODO: your solution here
}

module.exports = { maxSubArray };
