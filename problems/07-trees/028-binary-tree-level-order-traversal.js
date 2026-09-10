/**
 * 028 — Binary Tree Level Order Traversal
 * Difficulty: Medium   ·   Topic: Trees
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given the root of a binary tree, return its level-order traversal: the node values
 *   grouped level by level, from left to right.
 *
 * CONSTRAINTS
 *   The tree holds 0 to 2000 nodes.
 *   -1000 <= Node.val <= 1000
 *
 * EXAMPLES
 *   levelOrder([3, 9, 20, null, null, 15, 7])  ->  [[3], [9, 20], [15, 7]]
 *   levelOrder([1])                            ->  [[1]]
 *   levelOrder(null)                           ->  []
 *
 * EDGE CASES
 *   - Empty tree returns an empty array.
 *   - Capture the queue size at the start of each level to know where it ends.
 *   - Null children must not be enqueued.
 *
 * COMPLEXITY
 *   Naive:  O(n * h) time — repeatedly walk the tree collecting one depth at a time.
 *   Target: O(n) time, O(n) space — a BFS queue, processing exactly one level per outer iteration.
 * ----------------------------------------------------------------------
 */

function levelOrder(root) {
  // TODO: your solution here
}

module.exports = { levelOrder };
