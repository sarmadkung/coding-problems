/**
 * 175 — 3Sum Closest
 * Difficulty: Medium   ·   Topic: Two Pointers
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an integer array `nums` of length n and an integer `target`, find three integers at
 *   distinct indices whose sum is closest to `target`. Return that SUM.
 *
 * CONSTRAINTS
 *   3 <= nums.length <= 500
 *   -1000 <= nums[i] <= 1000
 *   -10^4 <= target <= 10^4
 *   Each input has exactly one closest sum.
 *
 * EXAMPLES
 *   threeSumClosest([-1, 2, 1, -4], 1)  ->  2   // -1 + 2 + 1
 *   threeSumClosest([0, 0, 0], 1)       ->  0
 *
 * EDGE CASES
 *   - An exact match can stop the search early.
 *   - The closest sum may be above or below the target.
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * HINTS
 *   1. Same skeleton as 008 3Sum — but track the best distance instead of collecting triplets.
 *
 * COMPLEXITY
 *   Naive:  O(n^3) time — try every triple.
 *   Target: O(n^2) time, O(1) extra space — sort; fix i, then two pointers on the rest, moving
 *           left when the sum is too small and right when too large.
 * ----------------------------------------------------------------------
 */

function threeSumClosest(nums, target) {
  // TODO: your solution here
}

module.exports = { threeSumClosest };
