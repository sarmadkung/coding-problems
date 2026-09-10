/**
 * 108 — Time Based Key-Value Store
 * Difficulty: Medium   ·   Topic: Binary Search
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Design a key-value store where set(key, value, timestamp) records a value, and
 *   get(key, timestamp) returns the value set at the largest timestamp <= the one given,
 *   or "" if none exists. Implement the TimeMap class.
 *
 * CONSTRAINTS
 *   1 <= key.length, value.length <= 100
 *   1 <= timestamp <= 10^7
 *   Timestamps for a given key are strictly increasing across set calls.
 *   At most 2 * 10^5 calls are made.
 *
 * EXAMPLES
 *   const tm = new TimeMap();
 *   tm.set("foo", "bar", 1);
 *   tm.get("foo", 1)  ->  "bar"
 *   tm.get("foo", 3)  ->  "bar"   // falls back to the latest <= 3
 *   tm.get("foo", 0)  ->  ""      // nothing that early
 *
 * EDGE CASES
 *   - A query before any set for that key returns the empty string.
 *   - An unknown key returns the empty string.
 *   - Timestamps arrive already sorted per key — exploit that.
 *
 * COMPLEXITY
 *   Naive:  O(n) per get — scan the whole history for the key.
 *   Target: O(log n) per get — store each key's history as a sorted array and binary search for the rightmost timestamp <= the query.
 * ----------------------------------------------------------------------
 */

class TimeMap {
  // TODO: your solution here
}

module.exports = { TimeMap };
