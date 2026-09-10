/**
 * 026 — Validate Binary Search Tree
 * Difficulty: Medium   ·   Topic: Trees
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given the root of a binary tree, determine whether it is a valid binary search tree:
 *   every node in a left subtree is strictly less than the node, every node in a right
 *   subtree is strictly greater, and both subtrees are themselves valid BSTs.
 *
 * CONSTRAINTS
 *   The tree holds 1 to 10^4 nodes.
 *   -2^31 <= Node.val <= 2^31 - 1
 *
 * EXAMPLES
 *   isValidBST([2, 1, 3])              ->  true
 *   isValidBST([5, 1, 4, null, null, 3, 6])  ->  false  // 3 sits left of 5 but under 4
 *   isValidBST([1, 1])                 ->  false  // equal values are not allowed
 *
 * EDGE CASES
 *   - Comparing only against the immediate parent is the classic wrong answer.
 *   - Duplicate values make it invalid.
 *   - Node values can reach the 32-bit limits, so seed bounds with +/-Infinity.
 *
 * COMPLEXITY
 *   Naive:  O(n^2) time — for each node scan its whole subtree for violations.
 *   Target: O(n) time, O(h) space — carry a (min, max) bound down the recursion, or verify that an in-order traversal is strictly increasing.
 * ----------------------------------------------------------------------
 */

function isValidBST(root) {
  // TODO: your solution here
}

module.exports = { isValidBST };
