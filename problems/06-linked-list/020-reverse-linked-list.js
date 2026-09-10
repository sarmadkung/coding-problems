/**
 * 020 — Reverse Linked List
 * Difficulty: Easy   ·   Topic: Linked List
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given the head of a singly linked list, reverse the list and return the new head.
 *   A node is { val, next }.
 *
 * CONSTRAINTS
 *   The list holds 0 to 5000 nodes.
 *   -5000 <= Node.val <= 5000
 *
 * EXAMPLES
 *   reverseList(1 -> 2 -> 3 -> 4 -> 5)  ->  5 -> 4 -> 3 -> 2 -> 1
 *   reverseList(1 -> 2)                 ->  2 -> 1
 *   reverseList(null)                   ->  null
 *
 * EDGE CASES
 *   - Empty list.
 *   - Single node.
 *   - Save `next` BEFORE rewriting the pointer or you lose the rest of the list.
 *
 * COMPLEXITY
 *   Naive:  O(n) time, O(n) space — copy values into an array and rebuild.
 *   Target: O(n) time, O(1) space — iterate with prev/curr/next pointers, re-linking as you go.
 * ----------------------------------------------------------------------
 */

function reverseList(head) {
  // TODO: your solution here
}

module.exports = { reverseList };
