/**
 * 007 — Valid Palindrome
 * Difficulty: Easy   ·   Topic: Two Pointers
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given a string `s`, return `true` if it is a palindrome after converting all
 *   uppercase letters to lowercase and removing every non-alphanumeric character.
 *
 * CONSTRAINTS
 *   1 <= s.length <= 2 * 10^5
 *   s consists of printable ASCII characters.
 *
 * EXAMPLES
 *   isPalindrome("A man, a plan, a canal: Panama")  ->  true
 *   isPalindrome("race a car")                      ->  false
 *   isPalindrome(" ")                               ->  true  // empty after cleaning
 *
 * EDGE CASES
 *   - A string with no alphanumeric characters is a palindrome.
 *   - Mixed case.
 *   - Digits count as alphanumeric.
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * COMPLEXITY
 *   Naive:  O(n) time, O(n) space — build a cleaned string, then compare it to its reverse.
 *   Target: O(n) time, O(1) space — two pointers walking inward, skipping non-alphanumeric
 *           characters in place.
 * ----------------------------------------------------------------------
 */

function isPalindrome(s) {
  // Naive Technique
  // let cleanedStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
  // let reveredStr = cleanedStr.split("").reverse().join("");
  // if(cleanedStr === reveredStr){
  //   return true
  // }
  // return false

  // Two Pointer

  let cleanedStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
  let last = cleanedStr.length-1;
  for(let first = 0; first < cleanedStr.length; first++) {
    if(cleanedStr[first] !== cleanedStr[last]) {
      return false;
    }
    last--;
  }
  return true;

}

module.exports = { isPalindrome };
