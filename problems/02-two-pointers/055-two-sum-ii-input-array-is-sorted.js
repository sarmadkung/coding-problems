/**
 * 055 — Two Sum II - Input Array Is Sorted
 * Difficulty: Medium   ·   Topic: Two Pointers
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given a 1-indexed array `numbers` sorted in non-decreasing order, find two numbers
 *   that add up to `target` and return their 1-based indices [index1, index2] with
 *   index1 < index2. You must use O(1) extra space.
 *
 * CONSTRAINTS
 *   2 <= numbers.length <= 3 * 10^4
 *   -1000 <= numbers[i] <= 1000
 *   Exactly one solution exists; numbers is sorted ascending.
 *
 * EXAMPLES
 *   twoSumII([2, 7, 11, 15], 9)  ->  [1, 2]   // 1-INDEXED
 *   twoSumII([2, 3, 4], 6)       ->  [1, 3]
 *   twoSumII([-1, 0], -1)        ->  [1, 2]
 *
 * EDGE CASES
 *   - The answer is 1-indexed — a classic off-by-one trap.
 *   - Negative values.
 *   - A hash map is O(n) space and breaks the constraint.
 *
 * COMPLEXITY
 *   Naive:  O(n) time, O(n) space — the hash map from Two Sum, which violates the O(1) space rule.
 *   Target: O(n) time, O(1) space — two pointers at the ends; move left in when the sum is too small, right in when too large.
 * ----------------------------------------------------------------------
 */

function twoSumII(numbers, target) {
  // TODO: your solution here
}

module.exports = { twoSumII };
