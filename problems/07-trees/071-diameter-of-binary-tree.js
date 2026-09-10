/**
 * 071 — Diameter of Binary Tree
 * Difficulty: Easy   ·   Topic: Trees
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given the root of a binary tree, return its diameter: the length of the longest path
 *   between any two nodes, measured in EDGES. The path need not pass through the root.
 *
 * CONSTRAINTS
 *   The tree holds 1 to 10^4 nodes.
 *   -100 <= Node.val <= 100
 *
 * EXAMPLES
 *   diameterOfBinaryTree([1, 2, 3, 4, 5])  ->  3   // path 4 - 2 - 1 - 3
 *   diameterOfBinaryTree([1, 2])           ->  1
 *   diameterOfBinaryTree([1])              ->  0   // a single node has no edges
 *
 * EDGE CASES
 *   - A single node has diameter 0, not 1.
 *   - The longest path often avoids the root entirely.
 *   - Edges, not nodes: a path of k nodes has k - 1 edges.
 *
 * COMPLEXITY
 *   Naive:  O(n^2) time — compute both subtree heights afresh at every node.
 *   Target: O(n) time, O(h) space — one DFS returning height while updating a running best of (leftHeight + rightHeight) at each node.
 * ----------------------------------------------------------------------
 */

function diameterOfBinaryTree(root) {
  // TODO: your solution here
}

module.exports = { diameterOfBinaryTree };
