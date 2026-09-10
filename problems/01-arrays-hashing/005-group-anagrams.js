/**
 * 005 — Group Anagrams
 * Difficulty: Medium   ·   Topic: Arrays & Hashing
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an array of strings `strs`, group the anagrams together.
 *   Return the groups in any order; the strings inside a group may be in any order.
 *
 * CONSTRAINTS
 *   1 <= strs.length <= 10^4
 *   0 <= strs[i].length <= 100
 *   strs[i] consists of lowercase English letters.
 *
 * EXAMPLES
 *   groupAnagrams(["eat","tea","tan","ate","nat","bat"])
 *     ->  [["eat","tea","ate"], ["tan","nat"], ["bat"]]
 *   groupAnagrams([""])   ->  [[""]]
 *
 * EDGE CASES
 *   - The empty string is its own group.
 *   - Single-character strings.
 *   - Words of different lengths can never be anagrams.
 *
 * COMPLEXITY
 *   Naive:  O(n^2 * k) time — compare each string against every group.
 *   Target: O(n * k) time — key each string by a 26-slot character count (or its sorted form) in a hash map.
 * ----------------------------------------------------------------------
 */

function groupAnagrams(strs) {
  // TODO: your solution here
}

module.exports = { groupAnagrams };
