/**
 * 171 — Valid Palindrome II
 * Difficulty: Easy   ·   Topic: Two Pointers
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given a string `s`, return true if `s` can be a palindrome after deleting AT MOST one
 *   character from it.
 *
 * CONSTRAINTS
 *   1 <= s.length <= 10^5
 *   s consists of lowercase English letters.
 *
 * EXAMPLES
 *   validPalindrome("aba")   ->  true   // already a palindrome
 *   validPalindrome("abca")  ->  true   // delete 'c' (or 'b')
 *   validPalindrome("abc")   ->  false
 *
 * EDGE CASES
 *   - At the first mismatch you may have to try BOTH deletions: skipping the left character can
 *     fail where skipping the right one succeeds ("cuppucu").
 *   - A single character is a palindrome.
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * HINTS
 *   1. Walk inward from both ends. You only get one chance to disagree.
 *
 * COMPLEXITY
 *   Naive:  O(n^2) time — delete each character in turn and check the remainder.
 *   Target: O(n) time, O(1) space — two pointers; at the first mismatch, check whether
 *           s[l+1..r] or s[l..r-1] is a palindrome.
 * ----------------------------------------------------------------------
 */

function validPalindrome(s) {
  // TODO: your solution here
}

module.exports = { validPalindrome };
