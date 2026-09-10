/**
 * 067 — Add Two Numbers
 * Difficulty: Medium   ·   Topic: Linked List
 * ----------------------------------------------------------------------
 * PROBLEM
 *   You are given two non-empty linked lists representing non-negative integers whose
 *   digits are stored in REVERSE order, one digit per node.
 *   Add them and return the sum as a linked list in the same reverse-order form.
 *
 * CONSTRAINTS
 *   Each list holds 1 to 100 nodes.
 *   0 <= Node.val <= 9
 *   No leading zeros except the number 0 itself.
 *
 * EXAMPLES
 *   addTwoNumbers(2 -> 4 -> 3, 5 -> 6 -> 4)  ->  7 -> 0 -> 8   // 342 + 465 = 807
 *   addTwoNumbers(0, 0)                      ->  0
 *   addTwoNumbers(9 -> 9, 1)                 ->  0 -> 0 -> 1   // 99 + 1 = 100
 *
 * EDGE CASES
 *   - Lists of different lengths.
 *   - A final carry needs an extra node (99 + 1).
 *   - Digits are already reversed, so add left to right.
 *
 * COMPLEXITY
 *   Naive:  Converting each list to a number, adding, and rebuilding overflows for 100-digit inputs.
 *   Target: O(max(m, n)) time — walk both lists together, tracking a carry and emitting sum % 10 each step.
 * ----------------------------------------------------------------------
 */

function addTwoNumbers(l1, l2) {
  // TODO: your solution here
}

module.exports = { addTwoNumbers };
