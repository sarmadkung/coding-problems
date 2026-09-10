/**
 * 027 — Lowest Common Ancestor of a BST
 * Difficulty: Medium   ·   Topic: Trees
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given a binary search tree and two nodes `p` and `q` present in it, return their
 *   lowest common ancestor. A node may be a descendant of itself.
 *
 * CONSTRAINTS
 *   The tree holds 2 to 10^5 nodes.
 *   All Node.val are unique; p != q; both exist in the tree.
 *
 * EXAMPLES
 *   lowestCommonAncestor([6,2,8,0,4,7,9], 2, 8)  ->  6
 *   lowestCommonAncestor([6,2,8,0,4,7,9], 2, 4)  ->  2  // a node descends from itself
 *   lowestCommonAncestor([2,1], 2, 1)            ->  2
 *
 * EDGE CASES
 *   - One node is the ancestor of the other.
 *   - p may be larger than q — do not assume an order.
 *   - Use the BST property; a generic tree search wastes it.
 *
 * COMPLEXITY
 *   Naive:  O(n) time — find both root-to-node paths and compare them.
 *   Target: O(h) time, O(1) space — walk down: go left while both values are smaller, right while both are larger; the first split is the answer.
 * ----------------------------------------------------------------------
 */

function lowestCommonAncestor(root, p, q) {
  // TODO: your solution here
}

module.exports = { lowestCommonAncestor };
