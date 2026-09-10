/**
 * 114 — Binary Tree Right Side View
 * Difficulty: Medium   ·   Topic: Trees
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given the root of a binary tree, imagine standing to its right.
 *   Return the values of the nodes visible from top to bottom.
 *
 * CONSTRAINTS
 *   The tree holds 0 to 100 nodes.
 *   -100 <= Node.val <= 100
 *
 * EXAMPLES
 *   rightSideView([1, 2, 3, null, 5, null, 4])  ->  [1, 3, 4]
 *   rightSideView([1, null, 3])                 ->  [1, 3]
 *   rightSideView(null)                         ->  []
 *
 * EDGE CASES
 *   - An empty tree returns an empty array.
 *   - The visible node is the LAST at each level, which is not always a right child.
 *   - A left-only tree shows every one of its nodes.
 *
 * COMPLEXITY
 *   Naive:  Walking only right children is wrong — it misses left nodes whose level has no right sibling.
 *   Target: O(n) time — a level-order BFS taking the final node of each level, or a DFS visiting right before left and recording the first node seen at each new depth.
 * ----------------------------------------------------------------------
 */

function rightSideView(root) {
  // TODO: your solution here
}

module.exports = { rightSideView };
