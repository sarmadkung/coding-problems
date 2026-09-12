/**
 * 002 — Contains Duplicate
 * Difficulty: Easy   ·   Topic: Arrays & Hashing
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an integer array `nums`, return `true` if any value appears at least twice,
 *   and `false` if every element is distinct.
 *
 * CONSTRAINTS
 *   1 <= nums.length <= 10^5
 *   -10^9 <= nums[i] <= 10^9
 *
 * EXAMPLES
 *   containsDuplicate([1, 2, 3, 1])  ->  true
 *   containsDuplicate([1, 2, 3, 4])  ->  false
 *   containsDuplicate([1])           ->  false
 *
 * EDGE CASES
 *   - Single-element array — always false.
 *   - All elements identical.
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * HINTS
 *   1. Must not mutate the caller's array if you sort — copy first.
 *
 * COMPLEXITY
 *   Naive:  O(n^2) time, O(1) space — compare every pair.
 *   Target: O(n) time, O(n) space — insert into a Set and stop at the first collision.
 * ----------------------------------------------------------------------
 */

function containsDuplicate(nums) {
  let store = new Map()
  for (index= 0;index<nums.length;index++)
  {
    const current = nums[index];
    if(store.has(current)){
      const count = store.get(current);
      store.set(current,count+1);
      return true
    } else {
      store.set(current,1)
    }
  }
  return false
}

module.exports = { containsDuplicate };
