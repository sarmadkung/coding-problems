/**
 * 009 — Container With Most Water
 * Difficulty: Medium   ·   Topic: Two Pointers
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an integer array `height` where each value is a vertical line at that index,
 *   find two lines that together with the x-axis form a container holding the most water.
 *   Return the maximum area. You may not slant the container.
 *
 * CONSTRAINTS
 *   2 <= height.length <= 10^5
 *   0 <= height[i] <= 10^4
 *
 * EXAMPLES
 *   maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])  ->  49
 *   maxArea([1, 1])                       ->  1
 *
 * EDGE CASES
 *   - Zero-height lines contribute no area.
 *   - Exactly two lines.
 *   - Area is min(h[l], h[r]) * (r - l), not the sum.
 *
 * COMPLEXITY
 *   Naive:  O(n^2) time — evaluate every pair of lines.
 *   Target: O(n) time, O(1) space — two pointers at the ends, always moving the shorter line inward.
 * ----------------------------------------------------------------------
 */

function maxArea(height) {
  // TODO: your solution here
}

module.exports = { maxArea };
