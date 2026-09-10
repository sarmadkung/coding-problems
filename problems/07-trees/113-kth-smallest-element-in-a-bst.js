/**
 * 113 — Kth Smallest Element in a BST
 * Difficulty: Medium   ·   Topic: Trees
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given the root of a binary search tree and an integer `k`, return the kth smallest
 *   value in the tree (1-indexed).
 *
 * CONSTRAINTS
 *   The tree holds n nodes, 1 <= k <= n <= 10^4
 *   0 <= Node.val <= 10^4
 *
 * EXAMPLES
 *   kthSmallest([3, 1, 4, null, 2], k = 1)          ->  1
 *   kthSmallest([5, 3, 6, 2, 4, null, null, 1], k = 3) ->  3
 *   kthSmallest([1], k = 1)                         ->  1
 *
 * EDGE CASES
 *   - k is 1-indexed, so k = 1 is the minimum.
 *   - An in-order traversal of a BST is sorted — that is the whole trick.
 *   - You can stop as soon as the kth value is reached; no need to finish the traversal.
 *
 * COMPLEXITY
 *   Naive:  O(n log n) time — collect all values and sort them, discarding the BST property.
 *   Target: O(h + k) time — an in-order traversal (iterative with a stack) that counts nodes and returns the moment the counter hits k.
 * ----------------------------------------------------------------------
 */

function kthSmallest(root, k) {
  // TODO: your solution here
}

module.exports = { kthSmallest };
