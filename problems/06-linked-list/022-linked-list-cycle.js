/**
 * 022 — Linked List Cycle
 * Difficulty: Easy   ·   Topic: Linked List
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given the head of a linked list, determine whether the list contains a cycle.
 *   A cycle exists if some node can be reached again by continuously following `next`.
 *
 * CONSTRAINTS
 *   The list holds 0 to 10^4 nodes.
 *   -10^5 <= Node.val <= 10^5
 *
 * EXAMPLES
 *   hasCycle(3 -> 2 -> 0 -> -4 -> back to node 2)  ->  true
 *   hasCycle(1 -> 2 -> back to node 1)             ->  true
 *   hasCycle(1)                                    ->  false
 *
 * EDGE CASES
 *   - Empty list and single node without a cycle.
 *   - A node whose `next` points at itself.
 *   - Values may repeat — identity, not value, defines the cycle.
 *
 * COMPLEXITY
 *   Naive:  O(n) time, O(n) space — record visited nodes in a Set.
 *   Target: O(n) time, O(1) space — Floyd's tortoise and hare: a slow and a fast pointer must meet inside any cycle.
 * ----------------------------------------------------------------------
 */

function hasCycle(head) {
  // TODO: your solution here
}

module.exports = { hasCycle };
