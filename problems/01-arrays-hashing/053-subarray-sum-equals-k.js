/**
 * 053 — Subarray Sum Equals K
 * Difficulty: Medium   ·   Topic: Arrays & Hashing
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an integer array `nums` and an integer `k`, return the total number of
 *   contiguous subarrays whose sum equals `k`.
 *
 * CONSTRAINTS
 *   1 <= nums.length <= 2 * 10^4
 *   -1000 <= nums[i] <= 1000
 *   -10^7 <= k <= 10^7
 *
 * EXAMPLES
 *   subarraySum([1, 1, 1], 2)     ->  2   // two overlapping [1,1]
 *   subarraySum([1, 2, 3], 3)     ->  2   // [1,2] and [3]
 *   subarraySum([1, -1, 0], 0)    ->  3
 *
 * EDGE CASES
 *   - Negative numbers mean a sliding window does NOT work here.
 *   - Zeros create extra valid subarrays.
 *   - Seed the prefix-count map with {0: 1} for subarrays starting at index 0.
 *
 * COMPLEXITY
 *   Naive:  O(n^2) time — sum every subarray with a running total.
 *   Target: O(n) time, O(n) space — a prefix-sum frequency map: at each index add the count of previously seen `prefix - k`.
 * ----------------------------------------------------------------------
 */

function subarraySum(nums, k) {
  // TODO: your solution here
}

module.exports = { subarraySum };
