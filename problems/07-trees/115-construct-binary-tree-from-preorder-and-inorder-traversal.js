/**
 * 115 — Construct Binary Tree from Preorder and Inorder Traversal
 * Difficulty: Medium   ·   Topic: Trees
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given two arrays `preorder` and `inorder` representing the traversals of the same
 *   binary tree with unique values, reconstruct and return the tree.
 *
 * CONSTRAINTS
 *   1 <= preorder.length <= 3000
 *   inorder.length == preorder.length
 *   All values are unique, and inorder is a genuine in-order traversal of the same tree.
 *
 * EXAMPLES
 *   buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])  ->  [3, 9, 20, null, null, 15, 7]
 *   buildTree([-1], [-1])                            ->  [-1]
 *
 * EDGE CASES
 *   - A single node.
 *   - preorder[0] is always the current subtree's root.
 *   - Its index in inorder splits the left and right subtrees — the sizes must be carried carefully.
 *
 * COMPLEXITY
 *   Naive:  O(n^2) time — a fresh linear scan of inorder to locate each root.
 *   Target: O(n) time — a value-to-index map over inorder for O(1) root lookup, recursing with index ranges rather than array slices.
 * ----------------------------------------------------------------------
 */

function buildTree(preorder, inorder) {
  // TODO: your solution here
}

module.exports = { buildTree };
