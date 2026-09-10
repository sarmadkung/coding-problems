/**
 * 110 — Palindrome Linked List
 * Difficulty: Easy   ·   Topic: Linked List
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given the head of a singly linked list, return true if it reads the same forwards and
 *   backwards. Aim for O(n) time and O(1) space.
 *
 * CONSTRAINTS
 *   The list holds 1 to 10^5 nodes.
 *   0 <= Node.val <= 9
 *
 * EXAMPLES
 *   isPalindrome(1 -> 2 -> 2 -> 1)  ->  true
 *   isPalindrome(1 -> 2)            ->  false
 *   isPalindrome(1)                 ->  true
 *
 * EDGE CASES
 *   - A single node is a palindrome.
 *   - Odd lengths leave a middle node that can be skipped.
 *   - Copying values to an array is O(n) space and misses the target.
 *
 * COMPLEXITY
 *   Naive:  O(n) time, O(n) space — copy the values into an array and compare with two pointers.
 *   Target: O(n) time, O(1) space — find the middle with slow/fast pointers, reverse the second half, compare the halves, then restore the list.
 * ----------------------------------------------------------------------
 */

function isPalindrome(head) {
  // TODO: your solution here
}

module.exports = { isPalindrome };
