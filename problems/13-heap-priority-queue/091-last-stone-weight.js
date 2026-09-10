/**
 * 091 — Last Stone Weight
 * Difficulty: Easy   ·   Topic: Heap / Priority Queue
 * ----------------------------------------------------------------------
 * PROBLEM
 *   You repeatedly smash the two heaviest stones together. If they are equal both are
 *   destroyed; otherwise the heavier one is left with the weight difference.
 *   Return the weight of the last remaining stone, or 0 if none remain.
 *
 * CONSTRAINTS
 *   1 <= stones.length <= 30
 *   1 <= stones[i] <= 1000
 *
 * EXAMPLES
 *   lastStoneWeight([2, 7, 4, 1, 8, 1])  ->  1
 *   lastStoneWeight([1])                 ->  1
 *   lastStoneWeight([2, 2])              ->  0   // both destroyed
 *
 * EDGE CASES
 *   - A single stone survives untouched.
 *   - All stones may cancel out, giving 0.
 *   - The difference stone re-enters the pool and may be smashed again.
 *
 * COMPLEXITY
 *   Naive:  O(n^2 log n) time — re-sort the array after every smash.
 *   Target: O(n log n) time — a max-heap: pop two, push back the difference when non-zero.
 * ----------------------------------------------------------------------
 */

function lastStoneWeight(stones) {
  // TODO: your solution here
}

module.exports = { lastStoneWeight };
