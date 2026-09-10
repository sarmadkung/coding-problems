/**
 * 080 — Longest Palindromic Substring
 * Difficulty: Medium   ·   Topic: Dynamic Programming
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given a string `s`, return the longest palindromic substring in it.
 *   If several are tied, any one of them is acceptable.
 *
 * CONSTRAINTS
 *   1 <= s.length <= 1000
 *   s consists of digits and English letters.
 *
 * EXAMPLES
 *   longestPalindrome("babad")  ->  "bab"   ("aba" is also valid)
 *   longestPalindrome("cbbd")   ->  "bb"
 *   longestPalindrome("a")      ->  "a"
 *
 * EDGE CASES
 *   - Single characters are palindromes.
 *   - Both odd centres (aba) and even centres (abba) must be handled.
 *   - No palindrome longer than 1 means returning any single character.
 *
 * COMPLEXITY
 *   Naive:  O(n^3) time — check every substring for palindromicity.
 *   Target: O(n^2) time, O(1) space — expand around each of the 2n - 1 possible centres. (Manacher's algorithm reaches O(n).)
 * ----------------------------------------------------------------------
 */

function longestPalindrome(s) {
  // TODO: your solution here
}

module.exports = { longestPalindrome };
