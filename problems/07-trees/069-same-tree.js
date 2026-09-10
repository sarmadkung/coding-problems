/**
 * 069 — Same Tree
 * Difficulty: Easy   ·   Topic: Trees
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given the roots of two binary trees, return true if they are structurally identical
 *   and every corresponding node holds the same value.
 *
 * CONSTRAINTS
 *   Each tree holds 0 to 100 nodes.
 *   -10^4 <= Node.val <= 10^4
 *
 * EXAMPLES
 *   isSameTree([1, 2, 3], [1, 2, 3])        ->  true
 *   isSameTree([1, 2], [1, null, 2])        ->  false  // same values, different shape
 *   isSameTree(null, null)                  ->  true
 *
 * EDGE CASES
 *   - Two empty trees are the same.
 *   - One empty and one not is false.
 *   - Structure matters as much as values.
 *
 * COMPLEXITY
 *   Naive:  Serialising both trees to strings and comparing works but allocates O(n) and is fragile about null markers.
 *   Target: O(n) time, O(h) space — compare the roots, then recurse into left-with-left and right-with-right.
 * ----------------------------------------------------------------------
 */

function isSameTree(p, q) {
  // TODO: your solution here
}

module.exports = { isSameTree };
