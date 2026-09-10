/**
 * 021 — Merge Two Sorted Lists
 * Difficulty: Easy   ·   Topic: Linked List
 * ----------------------------------------------------------------------
 * PROBLEM
 *   You are given the heads of two sorted linked lists. Splice them together into one
 *   sorted list and return its head. The result must reuse the existing nodes.
 *
 * CONSTRAINTS
 *   Each list holds 0 to 50 nodes.
 *   -100 <= Node.val <= 100
 *   Both lists are sorted ascending.
 *
 * EXAMPLES
 *   mergeTwoLists(1 -> 2 -> 4, 1 -> 3 -> 4)  ->  1 -> 1 -> 2 -> 3 -> 4 -> 4
 *   mergeTwoLists(null, null)                ->  null
 *   mergeTwoLists(null, 0)                   ->  0
 *
 * EDGE CASES
 *   - Either or both lists empty.
 *   - Duplicate values across lists.
 *   - Remember to attach the non-empty remainder at the end.
 *
 * COMPLEXITY
 *   Naive:  O((m+n) log(m+n)) time — concatenate then sort, discarding the sorted structure.
 *   Target: O(m + n) time, O(1) space — a dummy head node plus two pointers, always taking the smaller front node.
 * ----------------------------------------------------------------------
 */

function mergeTwoLists(list1, list2) {
  // TODO: your solution here
}

module.exports = { mergeTwoLists };
