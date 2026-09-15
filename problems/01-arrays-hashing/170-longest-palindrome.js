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
  let frequencyHash = new Map()
  let sLetters = s.split("");
  let longestPalindrome = 0
  let hasOdd = false;
  for (let i=0;i<sLetters.length;i++){
    let current = sLetters[i];
    if(frequencyHash.has(current)){
      frequencyHash.set(current,frequencyHash.get(current)+1)
    } else {
      frequencyHash.set(current,1);
    }
  }
  if(frequencyHash.size === 1){
    return sLetters.length
  }
  for (let [char,frequency] of frequencyHash){
    if(frequency %2 === 0){
      longestPalindrome += frequency
    } else {
    longestPalindrome += frequency - 1;
    hasOdd = true;
    }
  }
  if (hasOdd) {
    longestPalindrome += 1;
  }

  return longestPalindrome
}

module.exports = { longestPalindrome };
