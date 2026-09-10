/**
 * 062 — Daily Temperatures
 * Difficulty: Medium   ·   Topic: Stack
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an array `temperatures`, return an array `answer` where answer[i] is the
 *   number of days you must wait after day i for a warmer temperature.
 *   If no warmer day exists, answer[i] is 0.
 *
 * CONSTRAINTS
 *   1 <= temperatures.length <= 10^5
 *   30 <= temperatures[i] <= 100
 *
 * EXAMPLES
 *   dailyTemperatures([73,74,75,71,69,72,76,73])  ->  [1,1,4,2,1,1,0,0]
 *   dailyTemperatures([30, 40, 50, 60])           ->  [1, 1, 1, 0]
 *   dailyTemperatures([30, 30, 30])               ->  [0, 0, 0]
 *
 * EDGE CASES
 *   - Non-increasing input gives all zeros.
 *   - 'Warmer' is strict — an equal temperature does not count.
 *   - The answer is a day COUNT, not an index.
 *
 * COMPLEXITY
 *   Naive:  O(n^2) time — scan forward from each day. With n = 10^5 this times out.
 *   Target: O(n) time, O(n) space — a monotonically decreasing stack of indices; on each warmer day, pop and record the index difference.
 * ----------------------------------------------------------------------
 */

function dailyTemperatures(temperatures) {
  // TODO: your solution here
}

module.exports = { dailyTemperatures };
