/**
 * 052 — Longest Consecutive Sequence
 * Difficulty: Medium   ·   Topic: Arrays & Hashing
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an unsorted array `nums`, return the length of the longest sequence of
 *   consecutive integers in it. The elements need not be adjacent in the array.
 *   Must run in O(n) time.
 *
 * CONSTRAINTS
 *   0 <= nums.length <= 10^5
 *   -10^9 <= nums[i] <= 10^9
 *   Your solution must run in O(n) time.
 *
 * EXAMPLES
 *   longestConsecutive([100, 4, 200, 1, 3, 2])  ->  4   // [1,2,3,4]
 *   longestConsecutive([0,3,7,2,5,8,4,6,0,1])   ->  9
 *   longestConsecutive([])                      ->  0
 *
 * EDGE CASES
 *   - Empty array returns 0.
 *   - Duplicates must not inflate the count.
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * COMPLEXITY
 *   Naive:  O(n log n) time — sort and scan for runs. Correct, but misses the target.
 *   Target: O(n) time, O(n) space — put everything in a Set, and only start counting from x when
 *           x-1 is absent, so each run is walked once.
 * ----------------------------------------------------------------------
 */

function longestConsecutive(nums) {
  // TODO: your solution here
}

module.exports = { longestConsecutive };
