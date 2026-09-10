/**
 * 049 — Pow(x, n)
 * Difficulty: Medium   ·   Topic: Math & Bits
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Implement pow(x, n), which computes x raised to the power n.
 *   `n` may be negative.
 *
 * CONSTRAINTS
 *   -100.0 < x < 100.0
 *   -2^31 <= n <= 2^31 - 1
 *   -10^4 <= x^n <= 10^4
 *
 * EXAMPLES
 *   myPow(2.00000, 10)   ->  1024.00000
 *   myPow(2.10000, 3)    ->  9.26100
 *   myPow(2.00000, -2)   ->  0.25000  // 1 / 2^2
 *
 * EDGE CASES
 *   - n = 0 returns 1 for any x.
 *   - Negative n means the reciprocal.
 *   - n = -2^31 overflows when negated — widen it first.
 *
 * COMPLEXITY
 *   Naive:  O(n) time — multiply x by itself n times. With n = 2^31 that never finishes.
 *   Target: O(log n) time — fast exponentiation by squaring: x^n = (x^(n/2))^2, times x when n is odd.
 * ----------------------------------------------------------------------
 */

function myPow(x, n) {
  // TODO: your solution here
}

module.exports = { myPow };
