/**
 * 001 — Two Sum
 * Difficulty: Easy   ·   Topic: Arrays & Hashing
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an array of integers `nums` and an integer `target`, return the indices of the
 *   two numbers such that they add up to `target`.
 *   Exactly one valid answer exists, and you may not use the same element twice.
 *
 * CONSTRAINTS
 *   2 <= nums.length <= 10^5
 *   -10^9 <= nums[i] <= 10^9
 *   Exactly one valid answer exists.
 *
 * EXAMPLES
 *   twoSum([2, 7, 11, 15], 9)   ->  [0, 1]   // 2 + 7 === 9
 *   twoSum([3, 2, 4], 6)        ->  [1, 2]
 *   twoSum([3, 3], 6)           ->  [0, 1]   // duplicates are allowed
 *
 * EDGE CASES
 *   - Duplicate values that form the answer ([3,3]).
 *   - Negative numbers.
 *   - The answer is never `[i, i]` — an element cannot be reused.
 *
 * FOLLOW-UP
 *   - Can you come up with an algorithm that is less than O(n^2) time complexity?
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * COMPLEXITY
 *   Naive:  O(n^2) time, O(1) space — test every pair with nested loops.
 *   Target: O(n) time, O(n) space — one pass, storing `value -> index` in a hash map and looking
 *           up `target - value`.
 * ----------------------------------------------------------------------
 */

function twoSum(nums, target) {
  // using hash map
  // create map to store the traversed values
  let seen = new Map();

  // loop through whole array
  for (index=0;index<nums.length;index++){
    const current= nums[index];

    // Main logic is here, we will check if the current number subtracted from target what we need and we check if that exist in map, 
    // if exist then return current and map index otherwise store that value and index into map
    let needed = target - current

    if(seen.has(needed)){
      return [seen.get(needed),index]
    } else{
      seen.set(current,index)
    }

  }


  
}

module.exports = { twoSum };
