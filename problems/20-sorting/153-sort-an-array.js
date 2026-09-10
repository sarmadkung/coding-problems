/**
 * 153 — Sort an Array
 * Difficulty: Medium   ·   Topic: Sorting
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an array `nums`, sort it in ascending order WITHOUT using any built-in sort.
 *   The solution must run in O(n log n) time and use the smallest space possible.
 *
 * CONSTRAINTS
 *   1 <= nums.length <= 5 * 10^4
 *   -5 * 10^4 <= nums[i] <= 5 * 10^4
 *
 * EXAMPLES
 *   sortArray([5, 2, 3, 1])     ->  [1, 2, 3, 5]
 *   sortArray([5, 1, 1, 2, 0, 0]) ->  [0, 0, 1, 1, 2, 5]
 *   sortArray([1])              ->  [1]
 *
 * EDGE CASES
 *   - Duplicates must be preserved, not collapsed.
 *   - Already-sorted or reverse-sorted input.
 *   - Naive quicksort degrades to O(n^2) on sorted input — pivot choice matters.
 *
 * COMPLEXITY
 *   Naive:  O(n^2) time — bubble, selection or insertion sort. Fine to write once for understanding, too slow at n = 5 * 10^4.
 *   Target: O(n log n) time — merge sort (O(n) space, stable, predictable) or heapsort (O(1) space). This is the problem for actually IMPLEMENTING a sort.
 * ----------------------------------------------------------------------
 */

function sortArray(nums) {
  // TODO: your solution here
}

module.exports = { sortArray };
