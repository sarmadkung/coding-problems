/**
 * 047 — Counting Bits
 * Difficulty: Easy   ·   Topic: Math & Bits
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an integer `n`, return an array of length n + 1 where ans[i] is the number of
 *   1-bits in the binary representation of i.
 *
 * CONSTRAINTS
 *   0 <= n <= 10^5
 *
 * EXAMPLES
 *   countBits(2)  ->  [0, 1, 1]
 *   countBits(5)  ->  [0, 1, 1, 2, 1, 2]
 *   countBits(0)  ->  [0]
 *
 * EDGE CASES
 *   - n = 0 returns [0].
 *   - The result has n + 1 entries, not n.
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * HINTS
 *   1. Popcounting each number separately is O(n log n) — DP gives O(n).
 *
 * COMPLEXITY
 *   Naive:  O(n log n) time — count the bits of each number independently.
 *   Target: O(n) time — DP: ans[i] = ans[i >> 1] + (i & 1), reusing the already-computed half.
 * ----------------------------------------------------------------------
 */

function countBits(n) {
  // TODO: your solution here
}

module.exports = { countBits };
