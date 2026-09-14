/**
 * 164 — Contains Duplicate II
 * Difficulty: Easy   ·   Topic: Arrays & Hashing
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an integer array `nums` and an integer `k`, return true if there are two DISTINCT
 *   indices i and j such that nums[i] == nums[j] and |i - j| <= k.
 *
 * CONSTRAINTS
 *   1 <= nums.length <= 10^5
 *   -10^9 <= nums[i] <= 10^9
 *   0 <= k <= 10^5
 *
 * EXAMPLES
 *   containsNearbyDuplicate([1, 2, 3, 1], 3)        ->  true
 *   containsNearbyDuplicate([1, 0, 1, 1], 1)        ->  true
 *   containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)  ->  false  // duplicates exist, but too far apart
 *
 * EDGE CASES
 *   - k = 0 can never succeed — the indices must be distinct.
 *   - k larger than the array length behaves like plain Contains Duplicate.
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * HINTS
 *   1. You only ever care about the last k values you have seen.
 *
 * COMPLEXITY
 *   Naive:  O(n * k) time — for every index, scan the next k elements.
 *   Target: O(n) time, O(min(n, k)) space — a sliding-window Set of the last k values (or a map
 *           of value -> last index seen).
 * ----------------------------------------------------------------------
 */

function containsNearbyDuplicate(nums, k) {
  // TODO: your solution here
}

module.exports = { containsNearbyDuplicate };
