/**
 * 066 — Remove Nth Node From End of List
 * Difficulty: Medium   ·   Topic: Linked List
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given the head of a linked list, remove the nth node from the end and return the head.
 *   Try to do it in one pass.
 *
 * CONSTRAINTS
 *   The list holds 1 to 30 nodes.
 *   1 <= n <= number of nodes
 *   -100 <= Node.val <= 100
 *
 * EXAMPLES
 *   removeNthFromEnd(1 -> 2 -> 3 -> 4 -> 5, n = 2)  ->  1 -> 2 -> 3 -> 5
 *   removeNthFromEnd(1, n = 1)                      ->  null
 *   removeNthFromEnd(1 -> 2, n = 2)                 ->  2  // removes the head
 *
 * EDGE CASES
 *   - Removing the head itself — a dummy node before the head avoids a special case.
 *   - A single-node list becomes empty.
 *   - n counts from the END, not the start.
 *
 * COMPLEXITY
 *   Naive:  O(n) time, two passes — measure the length, then walk to position (length - n).
 *   Target: O(n) time, O(1) space, one pass — advance a lead pointer n steps, then move both until the lead hits the end.
 * ----------------------------------------------------------------------
 */

function removeNthFromEnd(head, n) {
  // TODO: your solution here
}

module.exports = { removeNthFromEnd };
