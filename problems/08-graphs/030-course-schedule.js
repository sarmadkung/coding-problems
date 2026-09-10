/**
 * 030 — Course Schedule
 * Difficulty: Medium   ·   Topic: Graphs
 * ----------------------------------------------------------------------
 * PROBLEM
 *   There are `numCourses` courses labelled 0..numCourses-1 and a list of prerequisite
 *   pairs [a, b] meaning you must take b before a.
 *   Return true if you can finish every course.
 *
 * CONSTRAINTS
 *   1 <= numCourses <= 2000
 *   0 <= prerequisites.length <= 5000
 *   All prerequisite pairs are distinct.
 *
 * EXAMPLES
 *   canFinish(2, [[1, 0]])          ->  true
 *   canFinish(2, [[1, 0], [0, 1]])  ->  false  // cyclic
 *   canFinish(1, [])                ->  true
 *
 * EDGE CASES
 *   - No prerequisites at all.
 *   - Disconnected components — check every node as a start.
 *   - A self-loop [a, a] is an immediate cycle.
 *
 * COMPLEXITY
 *   Naive:  Naive DFS without memoising finished nodes re-explores paths exponentially.
 *   Target: O(V + E) time — cycle detection with three-colour DFS, or Kahn's topological sort counting the nodes it emits.
 * ----------------------------------------------------------------------
 */

function canFinish(numCourses, prerequisites) {
  // TODO: your solution here
}

module.exports = { canFinish };
