/**
 * 165 — Isomorphic Strings
 * Difficulty: Easy   ·   Topic: Arrays & Hashing
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.
 *   Every occurrence of a character must be replaced with the same character, preserving
 *   order. No two characters may map to the same character, but a character may map to itself.
 *   Return true if `s` and `t` are isomorphic.
 *
 * CONSTRAINTS
 *   1 <= s.length <= 5 * 10^4
 *   t.length == s.length
 *   s and t consist of any valid ASCII characters.
 *
 * EXAMPLES
 *   isIsomorphic("egg", "add")      ->  true
 *   isIsomorphic("foo", "bar")      ->  false  // 'o' would need to map to both 'a' and 'r'
 *   isIsomorphic("paper", "title")  ->  true
 *
 * EDGE CASES
 *   - The mapping must be one-to-one in BOTH directions: "badc" / "baba" is false.
 *   - Characters are not limited to letters (digits, spaces, punctuation).
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * HINTS
 *   1. One map s -> t is not enough. What catches two s-characters landing on the same t-character?
 *
 * COMPLEXITY
 *   Naive:  O(n^2) time — for each pair of positions, check that equal-in-s means equal-in-t.
 *   Target: O(n) time, O(1) space (bounded alphabet) — two maps, s -> t and t -> s, checked on
 *           every step.
 * ----------------------------------------------------------------------
 */

function isIsomorphic(s, t) {
  // split into arrays
  // create 2 maps because we need to check mapping 2 ways
  // loop and check mapping 2 ways
  const firstLetters= s.split("");
  const secondLetters = t.split("");
  const fMap = new Map();
  const sMap = new Map();
  for (let i=0;i<firstLetters.length;i++){
    let fCurrent = firstLetters[i];
    let sCurrent = secondLetters[i];
    let isFExist = fMap.has(fCurrent);
    let isSExist = sMap.has(sCurrent);
    if(isFExist){
      let recentSecondLetter = fMap.get(fCurrent);
      if(recentSecondLetter !== sCurrent){
        return false
      }
    } else if(isSExist) {
      let recentFLetter = sMap.get(sCurrent);
      if(recentFLetter !== fCurrent){
        return false
      }
      
    } else {
      fMap.set(fCurrent,sCurrent)
      sMap.set(sCurrent,fCurrent)
    }
    
  }
  return true
}

module.exports = { isIsomorphic };
