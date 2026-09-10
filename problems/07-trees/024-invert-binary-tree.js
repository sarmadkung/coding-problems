/**
 * 024 — Invert Binary Tree
 * Difficulty: Easy   ·   Topic: Trees
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given the root of a binary tree, invert it — swap every node's left and right
 *   children — and return the root. A node is { val, left, right }.
 *
 * CONSTRAINTS
 *   The tree holds 0 to 100 nodes.
 *   -100 <= Node.val <= 100
 *
 * EXAMPLES
 *   invertTree([4,2,7,1,3,6,9])  ->  [4,7,2,9,6,3,1]
 *   invertTree([2,1,3])          ->  [2,3,1]
 *   invertTree(null)             ->  null
 *
 * EDGE CASES
 *   - Empty tree.
 *   - A single node is its own inverse.
 *   - Skewed trees, where recursion depth equals n.
 *
 * COMPLEXITY
 *   Naive:  There is no meaningfully worse approach — every node must be visited once.
 *   Target: O(n) time, O(h) space where h is the height — swap the children, then recurse into both sides.
 * ----------------------------------------------------------------------
 */

function invertTree(root) {
  // TODO: your solution here
}

module.exports = { invertTree };
