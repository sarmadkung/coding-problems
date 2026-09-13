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
 *   - Character COUNTS must match, not just the set of characters.
 *
 * FOLLOW-UP
 *   - Follow-up: what changes for Unicode input?
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * HINTS
 *   1. Different lengths can be rejected immediately.
 *
 * COMPLEXITY
 *   Naive:  O(n log n) time — sort both strings and compare.
 *   Target: O(n) time, O(1) space — a 26-slot count array incremented by s and decremented by t.
 * ----------------------------------------------------------------------
 */

function isAnagram(s, t) {
 let orderedT = t.split("").sort().join("")
 let orderedS = s.split("").sort().join("")
 
 if (orderedT === orderedS){
  return true
 }
 return false
}

module.exports = { isAnagram };
