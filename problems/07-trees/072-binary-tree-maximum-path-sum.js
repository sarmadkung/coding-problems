/**
 * 072 — Binary Tree Maximum Path Sum
 * Difficulty: Hard   ·   Topic: Trees
 * ----------------------------------------------------------------------
 * PROBLEM
 *   A path is any sequence of nodes connected by edges, appearing at most once each, and
 *   need not pass through the root. Return the maximum sum of node values along any path.
 *
 * CONSTRAINTS
 *   The tree holds 1 to 3 * 10^4 nodes.
 *   -1000 <= Node.val <= 1000
 *
 * EXAMPLES
 *   maxPathSum([1, 2, 3])                  ->  6   // 2 + 1 + 3
 *   maxPathSum([-10, 9, 20, null, null, 15, 7])  ->  42  // 15 + 20 + 7
 *   maxPathSum([-3])                       ->  -3  // all-negative tree
 *
 * EDGE CASES
 *   - All values negative — the answer is the single largest node, never 0.
 *   - A path may bend at a node, but what you RETURN upward may not.
 *   - Clamp a negative subtree contribution to 0 before adding it.
 *
 * COMPLEXITY
 *   Naive:  O(n^2) time — evaluate every possible path from every node.
 *   Target: O(n) time, O(h) space — DFS returning the best straight-line downward sum, while separately tracking the best bent path seen.
 * ----------------------------------------------------------------------
 */

function maxPathSum(root) {
  // TODO: your solution here
}

module.exports = { maxPathSum };
