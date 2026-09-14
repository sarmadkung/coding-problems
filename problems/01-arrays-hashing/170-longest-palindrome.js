/**
 * 170 — Longest Palindrome
 * Difficulty: Easy   ·   Topic: Arrays & Hashing
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given a string `s` of lowercase and uppercase letters, return the length of the longest
 *   palindrome that can be BUILT from those letters (each letter used at most as many times as
 *   it appears). Letters are case sensitive: "Aa" is not a palindrome.
 *
 * CONSTRAINTS
 *   1 <= s.length <= 2000
 *   s consists of lowercase and/or uppercase English letters only.
 *
 * EXAMPLES
 *   longestPalindrome("abccccdd")  ->  7   // e.g. "dccaccd"
 *   longestPalindrome("a")         ->  1
 *   longestPalindrome("Aa")        ->  1
 *
 * EDGE CASES
 *   - A letter with an odd count still contributes count - 1 letters.
 *   - At most ONE odd-count letter can sit in the middle.
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * HINTS
 *   1. You do not need to build the palindrome — only count letter pairs.
 *
 * COMPLEXITY
 *   Naive:  Trying arrangements is exponential; there is no reason to.
 *   Target: O(n) time, O(1) space (52 letters) — count letters, add every even part, and add 1
 *           if any count was odd.
 * ----------------------------------------------------------------------
 */

function longestPalindrome(s) {
  // TODO: your solution here
}

module.exports = { longestPalindrome };
