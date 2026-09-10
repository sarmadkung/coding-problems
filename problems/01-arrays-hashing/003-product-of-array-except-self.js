/**
 * 003 — Product of Array Except Self
 * Difficulty: Medium   ·   Topic: Arrays & Hashing
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an integer array `nums`, return an array `answer` where `answer[i]` is the
 *   product of all elements of `nums` except `nums[i]`.
 *   You must solve it WITHOUT using division, in O(n) time.
 *
 * CONSTRAINTS
 *   2 <= nums.length <= 10^5
 *   -30 <= nums[i] <= 30
 *   The product of any prefix or suffix fits in a 32-bit integer.
 *
 * EXAMPLES
 *   productExceptSelf([1, 2, 3, 4])    ->  [24, 12, 8, 6]
 *   productExceptSelf([-1, 1, 0, -3, 3]) ->  [0, 0, 9, 0, 0]
 *
 * EDGE CASES
 *   - A single zero — every slot except its own becomes 0.
 *   - Two or more zeros — the whole answer is 0.
 *   - Division is banned, so you cannot divide the total product.
 *
 * COMPLEXITY
 *   Naive:  O(n^2) time — recompute the product for each index.
 *   Target: O(n) time, O(1) extra space (output excluded) — a prefix pass then a suffix pass, accumulating into the result array.
 * ----------------------------------------------------------------------
 */

function productExceptSelf(nums) {
  // TODO: your solution here
}

module.exports = { productExceptSelf };
