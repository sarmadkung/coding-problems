/**
 * 051 — Valid Anagram
 * Difficulty: Easy   ·   Topic: Arrays & Hashing
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given two strings `s` and `t`, return true if `t` is an anagram of `s`.
 *   An anagram uses exactly the same characters with the same counts, reordered.
 *
 * CONSTRAINTS
 *   1 <= s.length, t.length <= 5 * 10^4
 *   s and t consist of lowercase English letters.
 *
 * EXAMPLES
 *   isAnagram("anagram", "nagaram")  ->  true
 *   isAnagram("rat", "car")          ->  false
 *   isAnagram("a", "ab")             ->  false  // different lengths
 *
 * EDGE CASES
 *   - Different lengths can be rejected immediately.
 *   - Character COUNTS must match, not just the set of characters.
 *   - Follow-up: what changes for Unicode input?
 *
 * COMPLEXITY
 *   Naive:  O(n log n) time — sort both strings and compare.
 *   Target: O(n) time, O(1) space — a 26-slot count array incremented by s and decremented by t.
 * ----------------------------------------------------------------------
 */

function isAnagram(s, t) {
  // TODO: your solution here
}

module.exports = { isAnagram };
