/**
 * 128 — Sum of Two Integers
 * Difficulty: Medium   ·   Topic: Math & Bits
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given two integers `a` and `b`, return their sum WITHOUT using the + or - operators.
 *
 * CONSTRAINTS
 *   -1000 <= a, b <= 1000
 *
 * EXAMPLES
 *   getSum(1, 2)    ->  3
 *   getSum(2, 3)    ->  5
 *   getSum(-1, 1)   ->  0
 *
 * EDGE CASES
 *   - Negative operands must work — two's complement handles this naturally.
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * HINTS
 *   1. a ^ b is the sum without carries; (a & b) << 1 is the carry.
 *   2. Loop until the carry becomes zero.
 *
 * COMPLEXITY
 *   Naive:  There is no simpler correct approach — the constraint is the whole exercise.
 *   Target: O(1) time (at most 32 iterations) — repeatedly combine the XOR sum with the shifted
 *           AND carry until no carry remains.
 * ----------------------------------------------------------------------
 */

function getSum(a, b) {
  // TODO: your solution here
}

module.exports = { getSum };
