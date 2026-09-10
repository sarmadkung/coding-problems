/**
 * 154 — Insertion Sort List
 * Difficulty: Medium   ·   Topic: Sorting
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given the head of a singly linked list, sort it using INSERTION SORT and return the
 *   sorted head. Insertion sort repeatedly removes the next element and inserts it into
 *   its correct position in the sorted prefix.
 *
 * CONSTRAINTS
 *   The list holds 1 to 5000 nodes.
 *   -5000 <= Node.val <= 5000
 *
 * EXAMPLES
 *   insertionSortList(4 -> 2 -> 1 -> 3)      ->  1 -> 2 -> 3 -> 4
 *   insertionSortList(-1 -> 5 -> 3 -> 4 -> 0) ->  -1 -> 0 -> 3 -> 4 -> 5
 *   insertionSortList(1)                     ->  1
 *
 * EDGE CASES
 *   - A single node is already sorted.
 *   - An already-sorted list is the best case, O(n).
 *   - A dummy head node removes the special case of inserting before the front.
 *
 * COMPLEXITY
 *   Naive:  Copying to an array, sorting, and rebuilding sidesteps the exercise entirely.
 *   Target: O(n^2) time, O(1) space — walk the list, and for each node scan the sorted prefix from a dummy head to find its insertion point and relink.
 * ----------------------------------------------------------------------
 */

function insertionSortList(head) {
  // TODO: your solution here
}

module.exports = { insertionSortList };
