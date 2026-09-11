/**
 * 101 — Majority Element
 * Difficulty: Easy   ·   Topic: Arrays & Hashing
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an array `nums` of size n, return the element that appears more than n/2 times.
 *   You may assume a majority element always exists.
 *
 * CONSTRAINTS
 *   n == nums.length, 1 <= n <= 5 * 10^4
 *   -10^9 <= nums[i] <= 10^9
 *   A majority element is guaranteed to exist.
 *
 * EXAMPLES
 *   majorityElement([3, 2, 3])           ->  3
 *   majorityElement([2, 2, 1, 1, 1, 2, 2]) ->  2
 *   majorityElement([1])                 ->  1
 *
 * EDGE CASES
 *   - A single element is trivially the majority.
 *   - 'More than n/2' is strict — exactly half does not qualify.
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * HINTS
 *   1. The guarantee that one exists is what makes the O(1)-space trick safe.
 *
 * COMPLEXITY
 *   Naive:  O(n) time, O(n) space — count every value in a hash map and take the largest count.
 *   Target: O(n) time, O(1) space — Boyer-Moore voting: keep a candidate and a counter, resetting
 *           the candidate whenever the counter hits zero.
 * ----------------------------------------------------------------------
 */

function majorityElement(nums) {
  // TODO: your solution here
}

module.exports = { majorityElement };
