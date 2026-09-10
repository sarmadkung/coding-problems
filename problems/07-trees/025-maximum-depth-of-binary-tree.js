/**
 * 025 — Maximum Depth of Binary Tree
 * Difficulty: Easy   ·   Topic: Trees
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given the root of a binary tree, return its maximum depth: the number of nodes
 *   along the longest path from the root down to a leaf.
 *
 * CONSTRAINTS
 *   The tree holds 0 to 10^4 nodes.
 *   -100 <= Node.val <= 100
 *
 * EXAMPLES
 *   maxDepth([3, 9, 20, null, null, 15, 7])  ->  3
 *   maxDepth([1, null, 2])                   ->  2
 *   maxDepth(null)                           ->  0
 *
 * EDGE CASES
 *   - Empty tree returns 0, not 1.
 *   - A single node has depth 1.
 *   - A degenerate tree of 10^4 nodes can overflow the recursion stack — consider an iterative BFS.
 *
 * COMPLEXITY
 *   Naive:  None — a full traversal is required either way.
 *   Target: O(n) time, O(h) space — 1 + max(depth(left), depth(right)), or a level-counting BFS.
 * ----------------------------------------------------------------------
 */

function maxDepth(root) {
  // TODO: your solution here
}

module.exports = { maxDepth };
