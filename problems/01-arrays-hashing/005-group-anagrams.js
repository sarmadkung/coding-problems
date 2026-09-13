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
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * HINTS
 *   1. Words of different lengths can never be anagrams.
 *
 * COMPLEXITY
 *   Naive:  O(n^2 * k) time — compare each string against every group.
 *   Target: O(n * k) time — key each string by a 26-slot character count (or its sorted form) in
 *           a hash map.
 * ----------------------------------------------------------------------
 */

function groupAnagrams(strs) {
  // Sorting + Object using 
  const groups = {}
  for (let word of strs){
    const sortedWord = word.split("").sort().join("");
    if(groups[sortedWord]){
      groups[sortedWord].push(word)
    } else {
      groups[sortedWord] = [word]
    }
  }
  // return Object.values(groups)

  // Sorting + Map
  const groupMap = new Map()
  for (let word of strs){
    let sortedWord = word.split("").sort().join("");
    if(!groupMap.has(sortedWord)){
      groupMap.set(sortedWord,[word]);
    } else {
      console.log("Else case is here")
      groupMap.get(sortedWord).push(word)
    }
  }
  return [...groupMap.values()]
}

module.exports = { groupAnagrams };
